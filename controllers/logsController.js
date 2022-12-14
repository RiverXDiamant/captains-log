const express = require("express");
const router = express.Router();
const Log = require("../models/logs");

// ================================================
// !                     ROUTES
// ================================================

// * === Index

// * Seed Route

router.get("/seed", (req, res) => {
  Log.create(
    [
      {
        title: "Judoon held us hostage on the Moon!...",
        entry:
          "Me and Martha were held hostage on the Moon! Specifically the entire hospital. They were looking for an escaped alien who maintains a human form by drinking the blood plasma through a straw! We found the aliens, it was a close one...",
        shipIsBroken: false,
      },
      {
        title: "I met myself, twice...",
        entry:
          "I was trying to figure out which Queen Elizabeth was not a Xygon when a portal opened and a Fez cam flying through. After about 5 minutes, my future 12th regeneration and my past (War Doctor) came through. This is going to be interesting. By the way, I do not wear sand shoes! ",
        shipIsBroken: true,
      },
    ],
    (err, data) => {
      res.redirect("/logs");
    }
  );
});

router.get("/", (req, res) => {
  Log.find({}, (error, allLogs) => {
    if (!error) {
      res.status(200).render("Index", {
        logs: allLogs,
      });
    } else {
      res.status(400).send(error);
    }
  });
});

// * === New

router.get("/new", (req, res) => {
  res.render("New");
});

// * Delete

router.delete("/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// * === Update

router.put("/:id", (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => {
    if (!err) {
      res.status(200).redirect(`/logs/${req.params.id}`);
    } else {
      res.status(400).send(err);
    }
  });
});

// * === Create

router.post("/", (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  Log.create(req.body, (error, createdLog) => {
    if (!error) {
      console.log(createdLog);
      res.status(200).redirect("/logs");
    } else {
      res.status(400).send(error);
    }
  });
  //   res.send(req.body);
  console.log(req.body);
});

// * === Edit
router.get("/:id/edit", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if (!err) {
      res.render("Edit", {
        log: foundLog,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// * === Show

router.get("/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    if (!error) {
      res.status(200).render("Show", {
        log: foundLog,
      });
    } else {
      res.status(400).send(error);
    }
  });
});

module.exports = router;

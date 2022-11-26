const express = require("express");
const router = express.Router();
const Logs = require("../models/logs");

// ================================================
//                      ROUTES
// ================================================

// * === Index

router.get("/", (req, res) => {
  Logs.find({}, (error, allLogs) => {
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
  Logs.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// * === Update

router.put("/:id", (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  Logs.findByIdAndUpdate(req.body.params.id, req.body, (err, updatedLogs) => {
    if (!err) {
      res.status(200).redirect(`/logs/${req.params.id}`);
    } else {
      res.status(400).send(err);
    }
  });
});

// * === Create

router.post("/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body, (error, createdLogs) => {
    if (!error) {
      console.log(createdLogs);
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
  Logs.findById(req.params.id, (err, foundLogs) => {
    if (!err) {
      res.render("Edit", {
        logs: foundLogs,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// * === Show

router.get("/:id", (req, res) => {
  Logs.findById(req.params.id, (error, foundLogs) => {
    if (!error) {
      res.status(200).render("Show", {
        logs: foundLogs,
      });
    } else {
      res.status(400).send(error);
    }
  });
});

module.exports = router;

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const Logs = require("./models/logs");
const reactViews = require("express-react-views");

// require Mongoose
const mongoose = require("mongoose");

// == Connect to mongoose database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo ✔️");
});

// ===== View Engine ===== \\
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

// ===== Middleware ===== \\

app.use((req, res, next) => {
  console.log("I'm running for all routes");
  console.log("1. Middleware");
  next();
});

// express.urlencoded is a built-in middleware function in Express.
// It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

// ========== ROUTES ========== \\

app.get("/", (req, res) => {
  res.send("Welcome to the Captain's Log Entry List");
});

// * === Index

app.get("/logs", (req, res) => {
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

app.get("/new", (req, res) => {
  res.render("New");
});

// * Delete
app.delete("/:id", (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// * === Create

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body, (error, createdLog) => {
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

// * === Show

app.get("/show", (req, res) => {
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

// ========== PORT ========== \\

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} 🕿`);
});

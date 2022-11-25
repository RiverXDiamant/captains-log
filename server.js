require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const CaptainsLog = require("./models/logs");
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

// New

app.get("/new", (req, res) => {
  res.render("New");
});

// Create
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  CaptainsLog.create(req.body, (error, createdCaptainsLog) => {
    if (!error) {
      console.log(createdCaptainsLog);
      res.status(200).redirect("/logs");
    } else {
      res.status(400).send(error);
    }
  });
  //   res.send(req.body);
  console.log(req.body);
});

// ========== PORT ========== \\

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} 🕿`);
});

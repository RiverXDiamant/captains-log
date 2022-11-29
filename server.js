require("dotenv").config();

const express = require("express");
const app = express();
const Log = require("./models/logs");
const PORT = 3000;
const logsController = require("./controllers/logsController");
const reactViews = require("express-react-views");
const methodOverride = require("method-override");

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
app.use(methodOverride("_method"));
app.use(express.static("public"));

// ========== ROUTES ========== \\

app.use("/logs", logsController);

// ========== PORT ========== \\

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} 🕿`);
});

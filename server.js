require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const Logs = require("./models/logs");
const logsController = require("./controllers/logsController");
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

app.use("/logs", logsController);

// ========== PORT ========== \\

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} 🕿`);
});

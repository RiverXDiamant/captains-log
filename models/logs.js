const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const logsSchema = new Schema({
  title: String,
  entry: String,
  shipIsBroken: { type: Boolean, default: true },
});

// Logs Model
const CaptainsLog = model("CaptainsLog", logsSchema);

module.exports = CaptainsLog;

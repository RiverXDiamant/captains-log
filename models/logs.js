const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: Boolean,
  },
  {
    timestamps: true,
  }
);

// Logs Model
const CaptainsLog = mongoose.model("CaptainsLog", logsSchema);

module.exports = CaptainsLog;

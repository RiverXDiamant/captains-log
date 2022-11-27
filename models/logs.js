const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const logSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Log Model
const Log = model("Log", logSchema);

module.exports = Log;

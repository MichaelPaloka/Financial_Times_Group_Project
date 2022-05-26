const mongoose = require("mongoose");

const TickerSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: [true, "Ticker is required."],
    minlength: [2, "Ticker Must be a minimum of 2 characters."]
  },
  numOfShares: {
    type: Number,
    required: [true, "Number of shares is required."]
  },
  createdBy: {
    type: String
  }
}, { timestamps: true });

const Ticker = mongoose.model("Ticker", TickerSchema);

module.exports = Ticker;
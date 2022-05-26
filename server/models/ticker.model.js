const mongoose = require("mongoose");

const TickerSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: [true, "Ticker is required."],
    minlength: [2, "Ticker Must be a minimum of 2 characters."]
  },
  numOfShares: {
    type: String,
    required: [true, "Number of shares is required."]
  }
}, { timestamps: true });

const Ticker = mongoose.model("Ticker", TickerSchema);

module.exports = Ticker;
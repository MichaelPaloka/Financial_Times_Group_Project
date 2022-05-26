const Ticker = require("../models/ticker.model");
const User = require("../models/user.model");


// Get All Tickers
exports.findAllTickers = async (req, res) => {
  console.log("We are in findAll function");
  try {
    const tickers = await Ticker.find();
    res.status(200).json({
      status: "success",
      data: {
        tickers
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: "fail",
      msg: err.message
    });
  }
};

// Get Ticker
exports.findOneTicker = async (req, res) => {
  try {
    const ticker = await Ticker.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        ticker
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: "fail",
      msg: err.message
    });
  }
};

// Create Ticker
exports.addNewTicker = async (req, res) => {
  console.log("We are in addNewTicker function");
  try {
    const { body } = req;
    const user = req.user;
    let ticker = await Ticker.create({
      userId: user._id,
      text: req.body.text,
    });
    ticker = await ticker.populate("userId", "name username").save();

    res.status(201).json({
      status: "success",
      data: {
        ticker
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: "fail",
      msg: err.message
    });
  }
};


// Update My Ticker
exports.updateTicker = async (req, res) => {
  try {
    const ticker = await Ticker.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        ticker
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Delete My Ticker
exports.deleteTicker = async (req, res) => {
  try {
    const tickerId = req.params.id;
    await Ticker.findOneAndDelete({ _id: tickerId, userId: req.user.id });
    res
      .status(204)
      .json({ status: "success", msg: "Ticker successfully deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
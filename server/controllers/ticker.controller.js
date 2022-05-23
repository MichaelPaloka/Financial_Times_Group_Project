const Ticker = require("../models/ticker.model");
const User = required("../models/user.model");
const jwt = require("jsonwebtoken");

const addNewTicker = async (req, res) => {
  const { body } = req;
  let newTicker = new Ticker(body);
  console.log(newTicker);
  console.log("new ticker added id", newTicker);

  try {
    newTicker = await newTicker.save();
    res.json(newTicker);
    return;
  } catch (error) {
    console.log("error!", error);
    res.status(400).json(error);
    return;
  }
};

module.exports = {
  addNewTicker,
};

const Ticker = require('../models/ticker.model');

module.exports.findAllTickers = (req, res) => {
    Ticker.find()
        .then((allDaTickers) => {
            res.json({ tickers: allDaTickers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });}

module.exports.findOneTicker = (req, res) => {
    Ticker.findOne({ _id: req.params.id })
        .then(oneSingleTicker => {
            res.json({ ticker: oneSingleTicker })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewTicker = (req, res) => {
    Ticker.create(req.body)
        .then(newlyCreatedTicker => {
            res.json({ ticker: newlyCreatedTicker })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingTicker = (req, res) => {
    Ticker.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedTicker => {
            res.json({ ticker: updatedTicker })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingTicker = (req, res) => {
    Ticker.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
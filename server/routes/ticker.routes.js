const TickerController = require('../controllers/ticker.controller');

module.exports = app => {
    app.get('/api/tickers', TickerController.findAllTickers);
    app.get('/api/tickers/:id', TickerController.findOneTicker);
    app.get('/api/tickers/byuser/:userId', TickerController.findTickersByUser);
    app.put('/api/tickers/:id', TickerController.updateExistingTicker);
    app.post('/api/tickers', TickerController.createNewTicker);
    app.delete('/api/tickers/:id', TickerController.deleteAnExistingTicker);
}
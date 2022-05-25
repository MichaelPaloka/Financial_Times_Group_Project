const TickerController = require("../controllers/ticker.controller");
const jwtMiddleware = require('../middleware/jwt.middleware')

module.exports = (app) => {

  app.post("/api/tickers", jwtMiddleware.authenticateJwt, TickerController.addNewTicker);

  app.get("/api/tickers", jwtMiddleware.authenticateJwt, TickerController.findAllTickers);

  app.put("/api/tickers/:id", jwtMiddleware.authenticateJwt,TickerController.updateTicker);

  app.delete("/api/tickers/:id", jwtMiddleware.authenticateJwt,TickerController.deleteTicker);

  app.get("/api/tickers/:id", jwtMiddleware.authenticateJwt,TickerController.findOneTicker);
};
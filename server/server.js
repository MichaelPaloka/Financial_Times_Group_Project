const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);
const TickerRoutes = require("./routes/ticker.routes");
TickerRoutes(app);

app.listen(8000, () => console.log("Listening on port: 8000"));

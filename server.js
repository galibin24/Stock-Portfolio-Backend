var express = require("express");
var app = express();
var cors = require("cors");
const axios = require("axios");
const { response } = require("express");

app.use(cors());

app.get("/api", (req, res, next) => {
  params = req.query;
  axios
    .get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${params.ticker}?period1=${params.startDate}&period2=${params.endDate}&interval=1d`
    )
    .then((response) => res.send(response.data));
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});

const express = require('express');
const app = express();
const PORT = 4000;
const config = require('./config.js');
const axios = require('axios');
const compression = require('compression');

app.use(compression());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.all('/*', (req, res, next) => {
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe' + req.url,
    method: req.method,
    headers: {
      Authorization: config.TOKEN
    },
    data: req.body
  }).then((response) => res.send(response.data)).catch(err => console.log(err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
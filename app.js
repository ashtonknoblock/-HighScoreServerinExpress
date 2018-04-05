const express = require('express');
const jsonBody = require("body/json");
const app = express();
const port = 3000;

var body;

var scores = [{
    name: "Edwin",
    score: 50
  }, {
    name: "David",
    score: 39
  }];

app.get('/scores', (req, res) => {
    scores.sort((a,b) => (b.score -a.score));
    scores = scores.splice(0,3);
    res.send(scores);
})

app.post('/scores', (req, res) => {
    res.statusCode = 201;
    jsonBody(req, res, (err, body) => {
      scores.push(body);
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

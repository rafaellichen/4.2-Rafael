const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`<h1>RANDOM NUMBER GENERATOR</h1>
            <a href="http://localhost:8000/random">/random<a>
            <br>
            <a href="http://localhost:8000/random/99">/random/99</a>
            <br>
            <a href="http://localhost:8000/random/1/100">/random/1/100</a>`);
});

app.get('/random', (req, res) => {
    obj = {"from": 0, "to": 9, "number": ""}
    obj.number = Math.floor(Math.random()*10)
    res.send(obj);
});

app.get('/random/:to', (req, res) => {
    num = Number(req.params.to)
    obj = {"from": 0, "to": num, "number": ""}
    obj.number = Math.floor(Math.random()*(num+1))
    res.send(obj);
});

app.get('/random/:from/:to', (req, res) => {
    numfrom = Number(req.params.from)
    numto = Number(req.params.to)
    obj = {"from": numfrom, "to": numto, "number": ""}
    obj.number = Math.floor(Math.random()*(numto-numfrom+1)+numfrom)
    res.send(obj);
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
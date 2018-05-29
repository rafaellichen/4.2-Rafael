const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`<h1>BEARS WEB RING INDEX</h1>
            <a href="http://localhost:8000/panda">panda</a>
            <br>
            <a href="http://localhost:8000/koala">koala</a>
            <br>
            <a href="http://localhost:8000/polar">polar</a>`);
});

app.get("/panda", (req, res) => {
    res.send(`<h1>PANDA BEARS</h1>
            <p>they are black and white?</p>
            <a href="http://localhost:8000/koala">koala</a>
            <br>
            <a href="http://localhost:8000/polar">polar</a>`)
})
app.get("/koala", (req, res) => {
    res.send(`<h1>KOALA BEARS</h1>
            <p>they are slow?</p>
            <a href="http://localhost:8000/panda">panda</a>
            <br>
            <a href="http://localhost:8000/polar">polar</a>`)
})
app.get("/polar", (req, res) => {
    res.send(`<h1>POLAR BEARS</h1>
            <p>I don't know</p>
            <a href="http://localhost:8000/koala">koala</a>
            <br>
            <a href="http://localhost:8000/panda">panda</a>`)
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
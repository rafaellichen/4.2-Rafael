const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`<h1>ANIMALS</h1>
            <ul>
                <li><a href="http://localhost:8000/birds">birds</a></li>
                <li><a href="http://localhost:8000/reptiles">reptiles</a></li>
                <li><a href="http://localhost:8000/mammals">mammals</a></li>
            </ul>`);
});

app.get("/birds", (req, res) => {
    res.send(`<h1>BIRDS</h1>
            <p>I don't know</p>
            <a href="http://localhost:8000/">back</a>`)
})
app.get("/reptiles", (req, res) => {
    res.send(`<h1>REPTILES</h1>
            <p>I don't know</p>
            <a href="http://localhost:8000/">back</a>`)
})
app.get("/mammals", (req, res) => {
    res.send(`<h1>MAMMALS</h1>
            <p>I don't know</p>
            <a href="http://localhost:8000/">back</a>`)
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
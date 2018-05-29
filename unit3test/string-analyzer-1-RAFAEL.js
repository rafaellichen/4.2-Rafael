const express = require('express');
const app = express();
const port = 8000;

// Question 3
app.get('/upper/:str', (req, res) => {
    str = req.params.str
    obj = {"original": str, "upper": str.toUpperCase()}
    res.send(obj)
});

app.get('/lower/:str', (req, res) => {
    str = req.params.str
    obj = {"original": str, "lower": str.toLowerCase()}
    res.send(obj)
});

app.get('/length/:str', (req, res) => {
    str = req.params.str
    obj = {"original": str, "length": str.length}
    res.send(obj)
});

app.get('/split/:str', (req, res) => {
    str = req.params.str
    obj = {"original": str, "split": str.split(" ")}
    res.send(obj)
});
// http://localhost:8000/split/hi%20and%20bye

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
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

// Question 4
app.get('/includes/:str/:search', (req, res) => {
    str = req.params.str
    find = req.params.search
    obj = {"original": str, "search": find, "includes": ""}
    obj.includes = str.includes(find)
    res.send(obj)
});

app.get('/slice/:str/:from/:to', (req, res) => {
    str = req.params.str
    s = req.params.from
    e = req.params.to
    obj = {"original": str, "from": s, "to": e, "slice": ""}
    obj.slice = str.slice(s,e)
    res.send(obj)
});

app.get('/charAt/:str/:index', (req, res) => {
    str = req.params.str
    i = req.params.index
    obj = {"original": str, "index": i, "charAt": ""}
    obj.charAt = str.charAt(i)
    res.send(obj)
});

app.get('/', (req, res) => {
    res.send(`<h1>STRING ANALYZER</h1>
            <a href="http://localhost:8000/upper/hello">/upper/hello</a>
            <br>
            <a href="http://localhost:8000/lower/HELLO">/lower/HELLO</a>
            <br>
            <a href="http://localhost:8000/length/abcdefghijklmnop">/length/abcdefghijklmnop</a>
            <br>
            <a href="http://localhost:8000/split/multiple words whoa">/split/multiple words whoa</a>
            <br>
            <a href="http://localhost:8000/includes/asdf/f">/includes/asdf/f</a>
            <br>
            <a href="http://localhost:8000/slice/hello/2/4">/slice/hello/2/4</a>
            <br>
            <a href="http://localhost:8000/charAt/ExpressJS/6">/charAt/ExpressJS/6</a>`)
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
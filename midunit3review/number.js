const express = require('express');
const app = express();
const port = 8000;

app.get('/:num', (req, res) => {
    number = Number(req.params.num)
    obj = {"guess": number, "hint": ""}
    if(number>42) obj.hint = "lower"
    else if(number<42) obj.hint = "higher"
    else obj.hint = "CORRECT"
    res.send(obj);
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
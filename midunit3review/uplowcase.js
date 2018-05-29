const express = require('express');
const app = express();
const port = 8000;

app.get('/string/:S/case/:C', (req, res) => {
    str = req.params.S
    strC = req.params.C
    obj = {"original": str, "command": strC, "converted": ""}
    if(strC == "lower") obj.converted = str.toLowerCase()
    else if(strC == "upper") obj.converted = str.toUpperCase()
    else obj.converted = str
    res.send(obj)
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
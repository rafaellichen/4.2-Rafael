const express = require("express");
const sqlite3 = require("sqlite3").verbose()
const app = express();
const port = 8000;
const db = new sqlite3.Database("rps.db")
const ai = ["rock","paper","scissors"]
const sql = "INSERT INTO rounds(id, user_choice, ai_choice, result) VALUES(?)"
const names = ["id", "user_choice", "ai_choice", "result"]

function toObj(arr) {
    var temp={}
    for(var i=0; i<arr.length; i++) temp[names[i]]=arr[i].replace(/"/g,"")
    return temp
}

function updateDB(result) {
    obj = [timestamp.join("-"),user,ai[number-1],result]
    obj = obj.map(function(x) {
        return '"'+x+'"'
    })
    db.run(sql.replace("?",obj.join()),function(err) {});
}

app.get('/choose/:choice', (req, res) => {
    user = req.params.choice
    number = Math.floor(Math.random()*3)+1
    now = new Date()
    timestamp = [now.getMonth()+1, now.getDate(), now.getFullYear(), now.getHours(), now.getMinutes(), now.getSeconds()]
    if(number==1) {
        // rock
        if(user=="rock") {
            updateDB("tie")
        } else if(user=="paper") {
            updateDB("win")
        } else {
            // user == "scissors"
            updateDB("lose")
        }
    } else if(number==2) {
        // paper
        if(user=="rock") {
            updateDB("lose")
        } else if(user=="paper") {
            updateDB("tie")
        } else {
            updateDB("win")
        }
    } else {
        // scissors
        if(user=="rock") {
            updateDB("win")
        } else if(user=="paper") {
            updateDB("lose")
        } else {
            updateDB("tie")
        }
    }
    res.send(toObj(obj))
})

app.get('/app', (req, ans) => {
    db.all('SELECT COUNT(result) FROM rounds WHERE result="win"', function(err, res) {
        obj = {}
        obj["total_wins"] = res[0]["COUNT(result)"]
        db.all('SELECT COUNT(result) FROM rounds WHERE result="lose"', function(err, res) {
            obj["total_losses"] = res[0]["COUNT(result)"]
            db.all('SELECT COUNT(result) FROM rounds WHERE result="tie"', function(err, res) {
                obj["total_ties"] = res[0]["COUNT(result)"]
                db.all('SELECT COUNT(user_choice) FROM rounds WHERE user_choice="rock"', function(err, res) {
                    obj["total_user_rocks"] = res[0]["COUNT(user_choice)"]
                    db.all('SELECT COUNT(user_choice) FROM rounds WHERE user_choice="paper"', function(err, res) {
                        obj["total_user_papers"] = res[0]["COUNT(user_choice)"]
                        db.all('SELECT COUNT(user_choice) FROM rounds WHERE user_choice="scissors"', function(err, res) {
                            obj["total_user_scissors"] = res[0]["COUNT(user_choice)"]
                            db.all('SELECT COUNT(ai_choice) FROM rounds WHERE user_choice="rock"', function(err, res) {
                                obj["total_ai_rocks"] = res[0]["COUNT(ai_choice)"]
                                db.all('SELECT COUNT(ai_choice) FROM rounds WHERE user_choice="paper"', function(err, res) {
                                    obj["total_ai_papers"] = res[0]["COUNT(ai_choice)"]
                                    db.all('SELECT COUNT(ai_choice) FROM rounds WHERE user_choice="scissors"', function(err, res) {
                                        obj["total_ai_scissors"] = res[0]["COUNT(ai_choice)"]
                                        ans.send(obj)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
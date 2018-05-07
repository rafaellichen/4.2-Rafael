const app = require('express')();
const cors = require('cors');
const PORT = 3100;
const sqlite3 = require('sqlite3').verbose();
const md5 = require('js-md5');

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
// app.use(session({secret: 'Cody'}));

let db = new sqlite3.Database('Unit5Final.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.use(cors());

app.get('/', (req, res) => {
  let api_docs = {
    'Welcome': 'This is the Unit 5 Final API',
    'Routes': {
      '/': 'This index page. Contains _this_ message!',
      '/users/new/:str1/:str2': 'register username and password',
      '/users/login/:str1/:str2': 'verify username and password',
    },
  }
  res.json(api_docs);
});

app.get('/users/new/:str1/:str2', (req, res) => {
  const { str1, str2 } = req.params;
  db.all("SELECT username FROM users", function(err, data) {
    var duplicate = false;
    for(var i=0; i<data.length; i++) {
      if(data[i].username==str1) {
        duplicate = true;
        break;
      }
    }
    if(!duplicate) {
      const str2md5 = md5(str2)
      const sql = "INSERT INTO users (username,password_digest) VALUES (?)"
      db.run(sql.replace("?",'"'+str1+'","'+str2md5+'"'),function(err) {
        if(err) {
          console.log("ERROR!")
        } else {
          console.log("DONE!")
        }
      });
    }
    if(duplicate) {
      res.send({message: "Username Already Exist", val: false})
    } else {
      res.send({message: "Registration Successful", val: true})
    }
  })
});

app.get('/users/login/:str1/:str2', (req, res) => {
  const { str1, str2 } = req.params;
  const sql = "SELECT username,password_digest FROM users WHERE username=?"
  db.all(sql.replace("?",'"'+str1+'"'),function(err, data) {
    if(err) {
      console.log("ERROR!")
    } else {
      if(data.length) {
        const str2md5 = md5(str2)
        if(str2md5===data[0].password_digest) {
          res.send({message: "LogIn Successful", username: data[0].username, password: data[0].password_digest.slice(0,11), val: true})
        }
      } else {
        res.send({message: "Username or Password is incorrect", val: false})
      }
      console.log("DONE!")
    }
  });
});

app.listen(PORT, () => {
  console.log('backend running on port ' + PORT);
});

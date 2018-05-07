import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';



class NewUser extends Component {
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <label>Username</label>
        <input id="UserName" type="text" />
        <br/>
        <label>Password</label>
        <input id="Password1" type="password"/>
        <br/>
        <label>Repeat Password</label>
        <input id="Password2" type="password"/>
        <br/>
        <button onClick={RegisterAccount}>Register</button>
      </div>
    )
  }
}

function LogOut() {
  localStorage.setItem("SignedIn", "false")
  document.getElementById("after").style.display = "none"
  window.location.replace("/users");
}

class CurUser extends Component {
  componentDidMount() {
    if(localStorage.getItem("SignedIn")==="true") {
      document.getElementById("before").style.display = "none"
      document.getElementById("name").innerText = localStorage.getItem("SignedUser")
    } else {
      document.getElementById("after").style.display = "none"
      document.getElementById("name").innerText= ""
    }
  }
  render() {
    return (
      <div>
        <h1>Current User</h1>
        <div id="before">
          <label>Username</label>
          <input id="UserName" type="text" />
          <br/>
          <label>Password</label>
          <input id="Password" type="password"/>
          <br/>
          <button onClick={LogIn}>Log In</button>
        </div>
        <div id="after">
          <h1>Welcome</h1>
          <label id="name"></label>
          <br/>
          <button onClick={LogOut}>Log Out</button>
        </div>
      </div>
    )
  }
}

function LogIn() {
  const username = document.getElementById("UserName").value
  const password1 = document.getElementById("Password").value
  if(password1.length<6) {
    alert("Password must have at least 6 characters")
    return
  }
  fetch("http://localhost:3100/users/login/"+username+"/"+password1)
  .then(response => response.json())
  .then(obj => {
    if(obj.val) {
      document.getElementById("name").innerText = obj.username
      localStorage.setItem('SignedIn', "true")
      localStorage.setItem("SignedUser", obj.username)
      window.location.replace("/users");
    } else {
      document.getElementById("UserName").value = ""
      document.getElementById("Password").value = ""
      alert(obj.message)
    }
  })
}

function RegisterAccount() {
  const username = document.getElementById("UserName").value
  if(!username) {
    alert("Empty username!")
    return
  }
  const password1 = document.getElementById("Password1").value
  const password2 = document.getElementById("Password2").value
  if(password1!==password2) {
    alert("Passwords do not match!")
    document.getElementById("Password1").value = ""
    document.getElementById("Password2").value = ""
    return
  }
  if(password1.length<6) {
    alert("Password must have at least 6 characters")
    return
  }
  fetch("http://localhost:3100/users/new/"+username+"/"+password1)
  .then(response => response.json())
  .then(obj => {
    alert(obj.message)
    localStorage.setItem('SignedIn', "true")
    localStorage.setItem("SignedUser", username)
    window.location.replace("/users");
  })
}

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/users">Current User</Link>{" "}
        <Link to="/users/new">New User</Link>{" "}
        <h1>Unit 5 Final</h1>
        <Switch>
          <Route path="/users/new" component={NewUser} />
          <Route path="/users" component={CurUser} />
        </Switch>
      </div>
    );
  }
}

export default App;
export {
  CurUser,
  NewUser
}
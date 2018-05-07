import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class AllQuotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:3100/all')
    .then(response => response.json())
    .then(obj => {
      this.setState({
        quotes: obj
      });
    });
  }
  render() {
    const { quotes } = this.state;
    return (
    <div>
    {quotes.map(q => 
    <p>{q}</p>)}
    </div>
    );
  }
}

class NewQuotes extends Component {
  render() {
    return (
      <div>
        <input id="userInput" type="text"></input>
        <button onClick={submitQuote}>Submit</button>
      </div>
    );
  }
}

function submitQuote() {
  fetch("http://localhost:3100/new/"+document.getElementById("userInput").value)
  document.getElementById("userInput").value=""
}

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/allquotes">All Quotes</Link>{" "}
        <Link to="/newquote">Submit Quote</Link>{" "}
        <h1>Fun Movie Quotes Page</h1>
        <Switch>
          <Route exact path="/allquotes" component={AllQuotes} />
          <Route exact path="/newquote" component={NewQuotes} />
        </Switch>
      </div>
    );
  }
}

export default App;
export {
  App,
  NewQuotes
}

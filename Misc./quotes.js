import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import NewQuote from './newquote';

const AllQuotes = (props) => {
  const { quotes } = props;

  return (
    <div>
    {quotes.map(q =>
    <p>{q}</p>)}
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      newQuote: ""
    }
  }
  componentDidMount = () => {
    fetch('/all')
    .then(response => response.json())
    .then(obj => {
      this.setState({
        quotes: obj
      });
    });
  }

  handleInput = (e) => {
    this.setState({
      newQuote: e.target.value
    })
  }

  handleSubmit = (e) => {
    fetch('/new' + this.state.newQuote)
      .then(response => response.json())
      .then(obj => {
        this.setState({
          newQuote: ''
        });
    })
    .catch(err => console.log(err));
  }

  getAllQuotes = () => {
    const { quotes } = this.state;

    return (
      <AllQuotes quotes={quotes} />
    )
  }

  getNewQuote = () => {
    const { quotes, newQuote } = this.state;

    return (
      <NewQuote
        quotes={quotes}
        newQuote={newQuote}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    )
  }

  render() {
    return (
      <div>
        <Link to="/allquotes">All Quotes</Link>{" "}
        <Link to="/newquote">Submit Quote</Link>{" "}
        <h1>Fun Movie Quotes Page</h1>
        <Switch>
          <Route exact path="/allquotes" render={this.getAllQuotes} />
          <Route exact path="/newquote"
          render={this.getNewQuote} />
        </Switch>
      </div>
    );
  }
}

export default App;

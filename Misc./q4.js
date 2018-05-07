const React = require("react");
const ReactDOM = require("react-dom");
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notrobot: false,
      cat: false
    };
  }
  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };
  render() {
    const { notrobot, cat } = this.state;
    return (
      <div>
        I am a cat
        <input name="cat" type="checkbox" checked={cat} onChange={this.handlechange} />
        I am not a robot
        <input name="notrobot" type="checkbox" checked={notrobot} onChange={this.handlechange} />
        <button disabled={!(this.state.cat && this.state.notrobot)}>proceed</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
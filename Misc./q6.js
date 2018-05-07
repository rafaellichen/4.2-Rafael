const React = require("react");
const ReactDOM = require("react-dom");
const axios = require('axios');
class Dog extends React.Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }
  getimage=()=>{
    axios
    .get('https://dog.ceo/api/breed/dingo/images/random')
    .then(response => {
      this.setState({
        img: response.data.message
      })
    })
  };
  render() {
    const {img} = this.state;
    return (
      <div>
        <button onClick={this.getimage}>Dingo</button>
        <br/>
        <img src={img}/>
      </div>
    );
  }
}
ReactDOM.render(<Dog />, document.getElementById("root"));
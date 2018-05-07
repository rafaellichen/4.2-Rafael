const React = require("react");
const ReactDOM = require("react-dom");
class Cal extends React.Component {
  constructor() {
    super();
    this.left = ['',1,2,3,4,5,6,7,8,9]
    this.op = ['','+','-','*','/']
    this.right = ['',1,2,3,4,5,6,7,8,9]
    this.state = {
      curleft: '',
      curright: '',
      result: ''
    }
  }
  handlechange = e => {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let op = document.getElementById('op');
    this.setState({
      curright: left.value,
      curleft: right.value
    })
    if (left.value && right.value) {
      if (op.value == '+') {
        this.state.result = left.value + right.value
      }
      else if (op.value == '-') {
        this.state.result = left.value-right.value
      }
      else if (op.value == '*') {
        this.state.result = left.value*right.value
      }
      else if (op.value == '/') {
        this.state.result = left.value/right.value
      }
    }
  }
  render() {
    const { result } = this.state;
    return (

      <div>
        <select id="left" onChange={this.handlechange}>
          {this.left.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        <select id="op" onChange={this.handlechange}>
          {this.op.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        <select id="right" onChange={this.handlechange}>
          {this.right.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        {result}
      </div>
    )
  }

}

ReactDOM.render(<Cal />, document.getElementById('root'))
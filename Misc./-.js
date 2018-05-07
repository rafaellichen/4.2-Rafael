const React = require("react");
const ReactDOM = require("react-dom");
const axios = require('axios');
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       notARobot: false,
//       cat: false
//     };
//   }

//   handleCheckboxChange = e => {
//     // Using es6 computed property name
//     if (this.state.cat === 'true' && this.state.notARobot === 'false') {

//     }
//     this.setState({
//       [e.target.name]: e.target.checked
//     });
//   };

//   render() {
//     const { notARobot, cat } = this.state;

//     return (
//       <div>

//         <p>
//           I am a NINJA CAT!{" "}
//           <input
//             name="cat"
//             type="checkbox"
//             checked={cat}
//             onChange={this.handleCheckboxChange}
//           />
//         </p>

//         <p>
//           I am not a robot{" "}
//           <input
//             name="notARobot"
//             type="checkbox"
//             checked={notARobot}
//             onChange={this.handleCheckboxChange}
//           />
//         </p>

//         <button disabled={(this.state.cat && this.state.notARobot) || (!this.state.cat)}> Submit </button>
//         <p>{notARobot ? 'ONLY NINJAH CATZ ALLOWED' : ""}</p>


//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

class Pizza extends React.Component {
  constructor() {
    super();
    this.crusts = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.op = ['', '+', '-', '*', '/']
    this.cheeses = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.state = {
      currentCrust: '',
      currentCheese: '',
      orderList: 0
    }
  }
  handleChange = e => {
    let cheese = document.querySelector('#cheese');
    let crust = document.querySelector('#crust');
    let op = document.querySelector('#op');
    this.setState({
      currentCheese: cheese.value,
      currentCrust: crust.value
    })
    if (cheese.value && crust.value) {
      if (op.value === '+'){
        this.state.orderList = (Number(crust.value) + Number(cheese.value))
      }
      else if (op.value === '-') {
        this.state.orderList = crust.value - cheese.value
      }
      else if (op.value === '*') {
        this.state.orderList = crust.value * cheese.value
      }
      else if (op.value === '/') {
        this.state.orderList = crust.value / cheese.value
      }
      crust.selectedIndex = 0;
      cheese.selectedIndex = 0;
      op.selectedIndex = 0;    
    }
  }
  render() {
    const { orderList } = this.state;
    return (

      <div>
        <h1>Math Stuff</h1>
        <select id="crust" onChange={this.handleChange}>
          {this.crusts.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        <select id="op" onChange={this.handleChange}>
          {this.op.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        <select id="cheese" onChange={this.handleChange}>
          {this.cheeses.map(c =>
            <option value={c}>{c}</option>)}
        </select>

        <h3>Equals:</h3>
        <ul>
          {orderList}

        </ul>
      </div>
    )
  }

}

ReactDOM.render(<Pizza />, document.querySelector('#root'))


// const styles = {
//   img: {
//     height: "15em"
//   }
// };

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       imgURL: ""
//     };
//   }

//   getRandomImage = () => {
//     axios
//       .get('https://dog.ceo/api/breed/dingo/images/random')
//       .then(response => {
//         this.setState({
//           imgURL: response.data.message
//         })
//       })
//   };

//   componentDidMount() {
//     this.getRandomImage();
//   }

//   render() {
//     const { imgURL } = this.state;

//     return (
//       <div>
//         <h3> Random Dingo Pictures </h3>
//         <div>
//           <img style={styles.img} alt="" src={imgURL} />
//         </div>
//         <p>
//           <button onClick={this.getRandomImage}>
//             {" "}
//             one more!{" "}
//           </button>
//         </p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));


// import logo from "./logo.svg";
// import "./App.css";
// // import Counter from "./components/Counter"
// import Counters from "./components/Counters";
// // import Form from "./components/Form";
// // import Inputs from "./components/Inputs";
// // import TextArea from "./components/TextArea";
// // import Select from "./components/Select";

// // function App() {
// //   return (
// //     <div className='my_app'>
// //       {/* Iza vitičastih zagrada 2 + 2 = {2 + 2} */}
// //       {/* <Form/> */}
// //       {/* <Inputs/> */}
// //       {/* <TextArea/> */}
// //       {/* <Select/> */}
// //       <L/>
// //     </div>
// //   );
// // }

// // import React, {Component} from "react";
// // import ChildComponent from "./components/ChildComponent";
// // import ChildComponent1 from "./components/ChildComponent1";
// // import ChildComponent2 from "./components/ChildComponent2";
// // import ChildComponent3 from "./components/ChildComponent3";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "This name will change in 3 seconds",
//       show: true,
//     };

//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({name: "This name was changed"});
//     }, 3000);
 

//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }
    
//   render() {
//     return(
//       <div>
//         {/* <p>
//           {this.state.name}
//         </p> */}
//         {/* {this.state.show ? <ChildComponent2 /> : null}
//         <br />
//         <button onClick={() => this.setState({ show: !this.state.show })}>
//           {this.state.show ? "Unmount Component" : "Mount Component"}
//         </button> */}
//         {/* <ChildComponent3/> */}
//         <Counters/>
//       </div>
//     );
//   }
// }

// export default App;
import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Counter from  "./components/Counter";
import Counters from  "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      {id: 0, value: 0},
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3}
    ]
  }

  render() {
    return (
      <div className="my-app">
        {/* Iza viticastih zagrada 2+2 = { 2+2 } */}
        {/* <Counter /> */}
        <NavBar totalCounters = {this.state.counters.length} />
        <Counters/>
      </div>
    );
  }
}
export default App;
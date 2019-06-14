import React, { Component } from 'react';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';
import './App.css';
import KeyPad from './components/KeyPad/KeyPad';


class App extends Component {
  constructor() {
    super();
    this.state ={
      result: ""
    };
  }

  onClick = button => {
    console.log('Click');
  }

  //  addInput = val => {
  //    console.log('click');
  //    if(val === "="){
  //      this.equate()
  //    } 
  //    else if (val === "Clear"){
  //      this.reset()
  //    }
  //    else if(val === "CE"){
  //      this.backspace()
  //    }
  //    else {
  //      this.setState({
  //        result: this.state.result + val
  //      })
  //    }
  //  };

render() {
  return (

    <div className="App">
      
      <div className="calculator">
        <DisplayComponent result={this.state.result} />
        <KeyPad onClick={this.onClick}/>
      </div>
    </div>
    );
  }
}

export default App;

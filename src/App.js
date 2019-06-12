import React, { Component } from 'react';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';
import Button from './components/Button/Button';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state ={
      result: ""
    };
  }

render() {
  return (

    <div className="App">
      
      <div className="calculator">
        <DisplayComponent result={this.state.result} />
      <div className="row">
          <Button>(</Button>
          <Button>)</Button>
          <Button>CE</Button>
          <Button>Clear</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

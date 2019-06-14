import React, { Component } from 'react';
import Button from '../Button/Button';

class KeyPad extends Component {

    render() {
        return (
        <div> 
        <div className="row">
          <Button name="(" >(</Button>
          <Button name=")" >)</Button>
          <Button name="CE" >CE</Button>
          <Button name="Clear" >Clear</Button>
        </div>
        <div className="row">
          <Button name="7">7</Button>
          <Button name="8">8</Button>
          <Button name="9">9</Button>
          <Button name="/">/</Button>
        </div>
        <div className="row">
          <Button name="4">4</Button>
          <Button name="5">5</Button>
          <Button name="6">6</Button>
          <Button name="*">*</Button>
        </div>
        <div className="row">
          <Button name="1">1</Button>
          <Button name="2">2</Button>
          <Button name="3">3</Button>
          <Button name="+">+</Button>
        </div>
        <div className="row">
          <Button name=".">.</Button>
          <Button name="0">0</Button>
          <Button name="=">=</Button>
          <Button name="-">-</Button>
        </div>
        </div>   
        );
    }
}

export default KeyPad;
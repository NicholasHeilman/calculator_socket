import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor() {
        super();
        this.state ={
                result: ""
        };
      }
    //gives a className of operator if button is an operator
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=" || val === "(" || val === ")" || val === "CE" || val === "Clear";
    };
    
    // onClick = () => {
    //     console.log('Click');
    // }
    onClick = button => {
        console.log('Click');
        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    render() {
        return (
            <div 
                className={`btn ${this.isOperator(this.props.children) ? "" : "operator"}`}
                onClick={this.onClick}
            >
                    {this.props.children}
            </div>
        );
    }
}

export default Button;
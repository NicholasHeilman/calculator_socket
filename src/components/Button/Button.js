import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    //gives a className of operator if button is an operator
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=";
    };

    render() {
        return (
            <div className={`btn ${this.isOperator(this.props.children) ? "" : "operator"}`}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;
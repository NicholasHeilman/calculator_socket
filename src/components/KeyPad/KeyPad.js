import React, {Component} from 'react';
import "./KeyPad.css";

class KeyPad extends Component {
  

    render() {
        return (
            <div className="button">
                <div className="row">
                    <button name="(" className="btn operator"  onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button name="CE" className="btn operator"  onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button name=")" className="btn operator"  onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button name="C" className="btn operator"  onClick={e => this.props.onClick(e.target.name)}>C</button>
                </div>
                <div className="row">
                    <button name="7" className="btn"  onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button name="8" className="btn" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button name="9" className="btn"  onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button name="+" className="btn operator" onClick={e => this.props.onClick(e.target.name)}>+</button>
                </div>
                <div className="row">
                    <button name="4" className="btn"  onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button name="5" className="btn"  onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button name="6" className="btn" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button name="-" className="btn operator" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div>
                <div className="row">
                    <button name="1" className="btn"  onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" className="btn" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button name="3" className="btn"  onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button name="*" className="btn operator" onClick={e => this.props.onClick(e.target.name)}>x</button>
                </div>
                <div className="row">
                    <button name="." className="btn" onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button name="0" className="btn" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button name="=" className="btn" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button name="/" className="btn operator" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                </div>
            </div>
        );
    }
}


export default KeyPad;
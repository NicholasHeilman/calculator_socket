import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import KeyPad from "./components/KeyPad/KeyPad";
import History from "./components/History/History";

class App extends Component {
    constructor(){
        super();
        this.state = {
            result: "",
            history: [],
        }
    }
  
    answer = [];

    onClick = button => {
        if(button === "="){
            this.calculate()
        } else if(button === "C"){
            this.reset()
        } else if(button === "CE"){
            this.backspace()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        } else {
            checkResult = this.state.result
        } try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        } 
        this.setState({
            history: [...this.state.history, this.state.result]
        });
        console.log(this.state.history);
      }

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="App">
                <div className="calculator">
                  <div className="row">
                    <Display result={this.state.result} />
                  </div>
                    <KeyPad onClick={this.onClick} />
                </div>
                <div>
                  <History history={this.state.history} />
                </div>
            </div>
        );
    }
}

export default App;
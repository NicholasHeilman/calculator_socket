import React, { Component } from 'react';
import "./History.css"

class History extends Component {

    render() {
        let historyList = this.props.history.map((equation, i) =>{
            return(
        <li key={i}>{equation}</li>)});    
        return (
            <div className="history">
                <h3>Last 10</h3>
                <ul>{historyList}</ul>
            </div>
        );
    }
}

export default History;
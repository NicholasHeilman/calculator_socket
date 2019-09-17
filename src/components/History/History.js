import React, { Component } from 'react';
import "./History.css"
// let socket = require('socket.io-client')('http://127.0.0.1:4001');

class History extends Component {

    


    render() {
            let historyList = this.props.history.map((equation, i) =>{
                return(
                    // socket.emit
                    (<li key={i}>{equation}</li>)
                    )});    
        return (
            <div className="historyList">
                <h3>Last 10</h3><br />
                <ul>{historyList}</ul>
            </div>
        );
    }
}

export default History;
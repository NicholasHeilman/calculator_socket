import React, { Component } from 'react';
import './DisplayComponent.css';

class DisplayComponent extends Component {
    
    render() {
       let {result} = this.props;
        return (
            <div className="display">
                <p>{result}</p>
            </div>
        );
    }
}

export default DisplayComponent;
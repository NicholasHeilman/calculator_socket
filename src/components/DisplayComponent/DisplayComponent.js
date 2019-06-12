import React, { Component } from 'react';
import './DisplayComponent.css';

class DisplayComponent extends Component {
    
    render() {
       
        return (
            <div className="display">
                {this.props.children}
            </div>
        );
    }
}

export default DisplayComponent;
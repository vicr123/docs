import React from 'react';

class KeycapContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <span className="keycapContainer">{this.props.children}</span>
    }
}

class Keycap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <span className="keycap">{this.props.children}</span>
    }
}

export { KeycapContainer, Keycap };
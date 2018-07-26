import React, { Component } from 'react';
export class Aa extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("Aa-constructor");
    }
    componentDidMount() {
        console.log("Aa-componentDidMount");
    }
    render() {
        return (
            <div>我是Aa</div>
        )
    }
}
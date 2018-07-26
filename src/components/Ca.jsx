import React, { Component } from 'react';
export class Ca extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("Ca-constructor");
    }
    componentDidMount() {
        console.log("Ca-componentDidMount");
    }
    render() {
        return (
            <div>我是Ca</div>
        )
    }
}
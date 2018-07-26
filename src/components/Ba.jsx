import React, { Component } from 'react';
export class Ba extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("Ba-constructor");
    }
    componentDidMount() {
        console.log("Ba-componentDidMount");
    }
    render() {
        return (
            <div>我是Ba</div>
        )
    }
}
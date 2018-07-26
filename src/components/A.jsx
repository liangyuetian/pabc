import React, { Component } from 'react';
import { Aa } from "./Aa";
export class A extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("A-constructor");
    }
    componentDidMount() {
        console.log("A-componentDidMount");
    }
    render() {
        return (
            <Aa />
        )
    }
}
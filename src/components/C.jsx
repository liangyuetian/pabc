import React, { Component } from 'react';
import { Ca } from "./Ca";
export class C extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("C-constructor");
    }
    componentDidMount() {
        console.log("C-componentDidMount");
    }
    render() {
        return (
            <Ca />
        )
    }
}
import React, { Component } from 'react';
import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
export class P extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("P-constructor");
    }
    componentDidMount() {
        console.log("P-componentDidMount");
    }
    render() {
        return [
            <A key="1" />,
            <B key="2" />,
            <C key="3" />
        ]

    }
}
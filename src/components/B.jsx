import React, { Component } from 'react';
import { Ba } from "./Ba";
export class B extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("B-constructor");
    }
    componentDidMount() {
        console.log("B-componentDidMount");
    }
    render() {
        return (
            <Ba />
        )
    }
}
import React, { Component } from 'react'
import Body from './Body'
import './Ex_Glass.css'
import Header from './Header'

export default class Ex_Glass extends Component {


    render() {
        return (
            <div
                className="ex-custom text-light"
            >
                <Header />
                <Body />
            </div>
        )
    }
}

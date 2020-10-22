import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

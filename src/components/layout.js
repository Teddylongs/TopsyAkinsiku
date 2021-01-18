import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Navbar from './Navbar'
import Footer from './Footer'

const LayoutWrapper = styled.div`

margin: auto;
`

export default class Layout extends Component {
    render() {
        
        return (
            <LayoutWrapper>
                {this.props.children}
                <Footer />
            </LayoutWrapper>
        )
    }
}

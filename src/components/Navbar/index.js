import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, NavMenu, Hamburger, NavItem, NavLinks} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Topsy Akinisku
                </NavLogo>
                <Hamburger>
                    <FaBars />
                </Hamburger>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

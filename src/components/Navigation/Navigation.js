import React, {Component} from 'react'
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


class Navigation extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Status
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/categories">
                            <NavItem eventKey={1}>Categories</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signin">
                            <NavItem eventKey={1} >Login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation

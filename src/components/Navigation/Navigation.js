import React, {Component} from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


class Navigation extends Component {

    componentDidMount(){}

    componentWillMount(){}

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

                            <NavItem eventKey={1} href="#">Notifications</NavItem>

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

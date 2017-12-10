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
            <div>
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
                    <Nav>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                              <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/categories">
                            <NavItem eventKey={1}>Categories</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/signin">
                            <NavItem eventKey={1} >Login</NavItem>
                        </LinkContainer>

                        <NavItem eventKey={1} href="#">Notifications</NavItem>
                        <NavItem eventKey={2} href="#">Login</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation

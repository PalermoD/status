import React, {Component} from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap'


class Navigation extends Component {

    componentDidMount(){}

    componentWillMount(){}


    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Status</a>
                    </Navbar.Brand>
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
                    <NavItem eventKey={1} href="/categories">Categories</NavItem>
                    <NavItem eventKey={1} href="#">Notifications</NavItem>
                    <NavItem eventKey={2} href="#">Login</NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation

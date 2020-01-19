import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, Button, NavDropdown, Jumbotron,  } from 'react-bootstrap'


export default class LanPageNav extends Component {
    render() {
        return (
            <div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">כאן-גרים</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">התחברות למערכת</Nav.Link>
    </Nav><br/>
  </Navbar>
            </div>
        )
    }
}



import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, Button, NavDropdown, Jumbotron,  } from 'react-bootstrap'


export default class Navigation extends Component {
    render() {
        return (
            <div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">כאן-גרים</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">ראשי</Nav.Link>
      <Nav.Link href="#features">איפיון</Nav.Link>
      <Nav.Link href="#pricing">תמחור</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
            </div>
        )
    }
}




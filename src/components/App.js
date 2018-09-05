import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">react-app-todo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Todo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://gitlab.com/Marcioacmauricio/react-app-todo">GitLab</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          Content
        </Container>
        <footer className="footer">
          <Container className="text-center">
            <span className="text-muted">Footer</span>
          </Container>
        </footer>    
      </div>
    );
  }
}
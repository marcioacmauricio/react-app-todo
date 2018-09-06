import React from 'react';
import { Link } from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
	Button,
	Row,
	Col
} from 'reactstrap';

export default class Header extends React.Component {
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
			<Container>
					<Navbar color="light" light expand="md">
						<NavbarBrand href="/">react-app-todo</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/ToDoList">Para Fazer</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://gitlab.com/Marcioacmauricio/react-app-todo">GitLab</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>

				</Container>
				<Container>

					<Row>
						<Col xs="3">
							<Button outline color="success" block><Link to='/'>Home</Link></Button>{' '}
							<Button outline color="success" block><Link to='/ToDoList'>Para Fazer</Link></Button>{' '}
						</Col>
						<Col xs="6">
						{this.props.children}
						</Col>
						<Col xs="3">.col-6</Col>
					</Row>
				</Container>
				<Container className="text-center footer">
					footer
				</Container>   
			</div>
		);
	}
}
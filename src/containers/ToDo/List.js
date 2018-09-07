import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Container, Button } from 'reactstrap';
export default class ToDoList extends React.Component {
	render() {
		return (
			<Container>
				<Card>
					<CardHeader>Lita de tarefas
					<Button outline color="success" className="float-right" ><Link to='/ToDoNew'>Nova Tarefa</Link></Button>
					</CardHeader>
						<CardBody>
							<CardTitle>Lita de Tarefas</CardTitle>
							<CardText>Você não possui nehuma tarefa!</CardText>
						</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
			</Container>
		);
	}
}
import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

export default class ToDoView extends React.Component {
	render() {
		return (
			<div>
				<Card>
					<CardHeader>Header</CardHeader>
						<CardBody>
							<CardTitle>Titulo da tarefa</CardTitle>
							<CardText>Você não possui nehuma tarefa!</CardText>
						</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
			</div>
		);
	}
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardFooter, CardBody, CardText, Form, Label, Input, FormGroup, Button } from 'reactstrap';
export default class ToDoEdit extends React.Component {
	render() {
		return (
			<div>
				<Card>
					<CardHeader>Alterar Tarefa</CardHeader>
						<CardBody>
							<CardText>
								<Form>
									<FormGroup>
										<Label for="tile">Título da tarefa</Label>
										<Input />
									</FormGroup>
									<FormGroup>
										<Label for="tile">Título da tarefa</Label>
										<Input type="textarea" />
									</FormGroup>
								</Form>
							</CardText>
						</CardBody>
					<CardFooter><Button outline color="success" className="float-right" ><Link to='/ToDoList'>Salvar</Link></Button></CardFooter>
				</Card>
			</div>
		);
	}
}
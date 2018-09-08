import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Container, Button, Table } from 'reactstrap';
import { fetchToDo, deleteToDo } from '../../actions/ToDo/Actions'
import { connect } from 'react-redux'
class ToDoList extends React.Component {
	constructor() {
		super();

		this.state = {items:[]};
		this.onDelete = this.onDelete.bind(this);
		this.items = true
	}

	componentWillMount() {

		this.props.fetchToDo();
		
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.items){
			this.setState({items:Object.values(nextProps.items)})
			
		}

	}
	onDelete (id) {
		this.props.deleteToDo({id: id});
		this.props.fetchToDo();		
	}
	onEdit (id) {
		this.props.history.push("/ToDoEdit/" + id);
	}
	render() {
		const ToDoItems = this.state.items.map(item => {
					return 					<tr>
						<th scope="row"><Link to={`ToDoView/${item.id}`}>{item.id}</Link></th>
						<td>{item.title}</td>
						<td>{item.description}</td>
						<td><Button onClick={() => {this.onEdit(item.id)}} outline color="success" >Editar</Button></td>
						<td><Button onClick={() => {this.onDelete(item.id)}} outline color="danger" >Remover</Button></td>
					</tr>
			});






		return (
			<Container>
				<Card>
					<CardHeader>Lita de tarefas
					<Button outline color="success" className="float-right" ><Link to='/ToDoNew'>Nova Tarefa</Link></Button>
					</CardHeader>
						<CardBody>
							<CardTitle>Lita de Tarefas</CardTitle>
							<CardText>
								<Table bordered>
									<thead>
										<tr>
											<th>#</th>
											<th>Título</th>
											<th>Descrição</th>
											<th>Editar</th>
											<th>Excluir</th>
										</tr>
									</thead>
									<tbody>
									{ToDoItems}
									</tbody>
								</Table>
							</CardText>
						</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
			</Container>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		item: state.ToDoReducer.item,
		items: state.ToDoReducer.items
	}
	
}
export default connect(mapStateToProps, {fetchToDo, deleteToDo})(ToDoList);
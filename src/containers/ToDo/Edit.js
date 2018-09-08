import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText, Form, Label, Input, FormGroup, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { createToDo, readToDo, updateToDo } from '../../actions/ToDo/Actions'

class ToDoEdit extends React.Component {
	constructor() {
		super();

		this.state = {
			id: 0,
			title: '',
			description: ''
		};
		this.id = 0;
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e) {
		let post = {
			id: this.state.id,
			title: this.state.title,
			description: this.state.description
		};
		if (this.id > 0){
			this.props.updateToDo(post);
		} else {
			this.props.createToDo(post);
			this.props.history.push("/ToDoList");

		}
		

		e.preventDefault();	   
	}
	componentWillMount() {
		if (this.props.match.params.id > 0){
			this.id = this.props.match.params.id
		}		
	}
	componentDidMount() {
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.item.id > 0){
			this.id = nextProps.item.id
			this.setState(nextProps.item)
			if (this.props.match.path === "/ToDoNew") {
				this.props.history.push("/ToDoEdit/" + this.state.id);
			}
			
		}
		if ((this.props.match.params.id > 0) && (this.state.id === 0)){
			this.setState(nextProps.items[this.props.match.params.id])
		}
			
	}	
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
										<Input name="title" onChange={this.onChange} value={this.state.title} />
									</FormGroup>
									<FormGroup>
										<Label for="tile">Título da tarefa</Label>
										<Input name="description" type="textarea" onChange={this.onChange} value={this.state.description} />
									</FormGroup>
								</Form>
							</CardText>
						</CardBody>
					<CardFooter><Button outline color="success" onClick={this.onSubmit.bind(this)} className="float-right" >Salvar</Button></CardFooter>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		item: state.ToDoReducer.item,
		items: state.ToDoReducer.items
	}
	
}
export default connect(mapStateToProps, {readToDo, createToDo, updateToDo})(ToDoEdit);
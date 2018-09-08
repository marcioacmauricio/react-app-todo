import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import { readToDo } from '../../actions/ToDo/Actions'
import { connect } from 'react-redux'
class ToDoView extends React.Component {
	constructor() {
		super();

		this.state = {
			id: 0,
			title: '',
			description: ''
		};
	}
	componentWillMount() {
		if (this.props.match.params.id > 0){
			this.props.readToDo(this.props.match.params.id);
		}		
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.item.id > 0){
			this.setState(nextProps.item)
		}
	}	
	render() {
		return (
			<div>
				<Card>
					<CardHeader>Tarefa</CardHeader>
						<CardBody>
							<CardTitle>{this.state.title}</CardTitle>
							<CardText>{this.state.description}</CardText>
						</CardBody>
					<CardFooter><Button outline color="success" className="float-right" ><Link to='/ToDoList'>Lista</Link></Button></CardFooter>
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
export default connect(mapStateToProps, {readToDo})(ToDoView);
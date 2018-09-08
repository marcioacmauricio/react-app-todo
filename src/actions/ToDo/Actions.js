import { CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODO } from './types'

export const createToDo = (todoData) => dispatch => {
	fetch('http://localhost:8081/ToDo', { 
		method : 'PUT',
			headers : {
				'content-type': 'Application/json'
			},
			body: JSON.stringify(todoData)
		})
		.then(
			res => res.json()
		)
		.then(
			ToDoItem => dispatch({
			type: CREATE_TODO,
			payload: ToDoItem
		})
	);
}

export const readToDo = (ToDoId) => dispatch => {
	fetch('http://localhost:8081/ToDo/' + ToDoId)
	.then(
		res => res.json()
	)
	.then(
		ToDoItem => dispatch({
			type: READ_TODO,
			payload: ToDoItem
		})
	);
}

export const updateToDo = (todoData) => dispatch => {
	fetch('http://localhost:8081/ToDo/' + todoData.id, { 
		method : 'PUT',
			headers : {
				'content-type': 'Application/json'
			},
			body: JSON.stringify(todoData)
		})
		.then(
			res => res.json()
		)
		.then(
			ToDoItem => dispatch({
			type: UPDATE_TODO,
			payload: ToDoItem
		})
	);
}

export const deleteToDo = (todoData) => dispatch => {
	fetch('http://localhost:8081/ToDo', { 
		method : 'DELETE',
			headers : {
				'content-type': 'Application/json'
			},
			body: JSON.stringify(todoData)
		})
		.then(
			res => res.json()
		)
		.then(
			ToDoItem => dispatch({
			type: DELETE_TODO,
			payload: ToDoItem
		})
	);
}

export const fetchToDo = (todoData) => dispatch => {
	fetch('http://localhost:8081/ToDo', { 
		method : 'POST',
			headers : {
				'content-type': 'Application/json'
			},
			body: JSON.stringify(todoData)
		})
		.then(
			res => res.json()
		)
		.then(
			ToDoList => dispatch({
			type: FETCH_TODO,
			payload: ToDoList
		})
	);
}

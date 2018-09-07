import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import {
	ToDoList,
	ToDoEdit,
	ToDoView
} from '../containers/ToDo'

const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/ToDoList' component={ToDoList}/>
			<Route path='/ToDoNew' component={ToDoEdit}/>
			<Route path='/ToDoView' component={ToDoView}/>
		</Switch>
	</main>
)

export default Routes

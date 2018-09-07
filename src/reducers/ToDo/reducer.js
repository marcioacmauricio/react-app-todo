import { CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODO } from '../../actions/ToDo/types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TODO: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TODO: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TODO: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TODO: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TODO: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}
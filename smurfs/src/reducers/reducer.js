import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
} from '../actions/actions';

const initialState = {
	smurfs: [
		{
			name: '',
			age: '',
			height: '',
			id: 0
		}
	],
	isLoading: false,
	error: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isLoading: true,
				error: ''
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload,
				error: ''
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				error: ''
			};
		default:
			return state;
	}
};
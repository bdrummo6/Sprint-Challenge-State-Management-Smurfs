import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => {
	return dispatch => {
		dispatch({ type: FETCH_DATA_START });
		axios
			.get(`http://localhost:3333/smurfs`)
			.then(res => {
				console.log(res.data);
				dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
			})
			.catch(err => {
				dispatch({ type: FETCH_DATA_FAILURE, payload: err });
			});
	}
};


export const ADD_DATA_START = 'ADD_DATA_START';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE';

export const addData = ( data ) => {
	return dispatch => {
		dispatch({ type: ADD_DATA_START });
		axios
			.post(`http://localhost:3333/smurfs`, data)
			.then(res => {
				console.log(res.data);
				dispatch({ type: ADD_DATA_SUCCESS, payload: res.data });
			})
			.catch(err => {
				dispatch({ type: ADD_DATA_FAILURE, payload: err });
			});
	}
};


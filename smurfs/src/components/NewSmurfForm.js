import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

import { Button } from 'reactstrap';

const NewSmurfForm = props => {

	const [smurf, setSmurf] = useState({ name: '', age: '', height: '', id: '' });

	const handleChange = event => {
		setSmurf({...smurf, [event.target.name]: event.target.value });
	};

	const handleSubmit= event => {
		event.preventDefault();
		setSmurf({ name: '', age: '', height: '' });
	};

	return (
		<form onSubmit={event => handleSubmit(event)} >
			<label htmlFor='nameInput'>Name: </label>
			<input
				type='text'
				maxLength='30'
				id='nameInput'
				name='name'
				placeholder='Input name...'
            value={smurf.name}
            onChange={event => handleChange(event)}
            autoFocus='true'
         />

         <label htmlFor='ageInput'>Age: </label>
         <input
            type='text'
            maxLength='8'
			id='ageInput'
				name='age'
				placeholder='Input age...'
            value={smurf.age}
            onChange={event => handleChange(event)}
         />

         <label htmlFor='heightInput'>Height: </label>
         <input
            type='text'
            maxLength='8'
			   id='heightInput'
				name='height'
				placeholder='Input height...'
            value={smurf.height}
            onChange={event => handleChange(event)}
         />
         <br/>
         <Button type='submit'>Add Smurf</Button>
      </form>
   )
};

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs
	}
};

export default connect(mapStateToProps, {getData})(NewSmurfForm);
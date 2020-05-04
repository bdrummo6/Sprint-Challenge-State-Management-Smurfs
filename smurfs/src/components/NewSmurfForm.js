import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getData, addData } from '../actions/actions';

import { Button } from 'reactstrap';

const NewSmurfForm = props => {

	const [smurfs, setSmurfs] = useState({ name: '', age: '', height: '' });

	const handleChange = event => {
		event.preventDefault();
		setSmurfs({...smurfs, [event.target.name]: event.target.value });
	};

	const handleSubmit= event => {
		event.preventDefault();
		props.addData(smurfs);
		setSmurfs({ name: '', age: '', height: '' });
	};

	return (
		<form onSubmit={event => handleSubmit(event)}>
			<label htmlFor='nameInput'>Name: </label>
			<input
				type='text'
				maxLength='30'
				id='nameInput'
				name='name'
				placeholder='Input name...'
            value={smurfs.name}
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
            value={smurfs.age}
				onChange={event => handleChange(event)}
         />

         <label htmlFor='heightInput'>Height: </label>
         <input
            type='text'
            maxLength='8'
			   id='heightInput'
				name='height'
				placeholder='Input height...'
            value={smurfs.height}
				onChange={event => handleChange(event)}
         />
         <br/>
         <Button>Add Smurf</Button>
      </form>
   )
};

export default connect(null, {getData, addData})(NewSmurfForm);
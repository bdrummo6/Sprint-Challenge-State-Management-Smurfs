import React from 'react';

import { Button } from 'reactstrap';

const NewSmurfForm = props => {

	return (
		<form onSubmit={props.submit}>
			<label htmlFor='nameInput'>
			<input
				type='text'
				maxLength='30'
				id='nameInput'
				name='name'
				placeholder='Input name...'
				value={props.smurf.name}
				onChange={props.change}
				autoFocus='true'
			/>
			 </label>

			<label htmlFor='ageInput'> 
			<input
				type='text'
				maxLength='8'
				id='ageInput'
				name='age'
				placeholder='Input age...'
				value={props.smurf.age}
				onChange={props.change}
				style={{ marginLeft: '10px'}}
			/>
			</label>

			<label htmlFor='heightInput'>
			<input
				type='text'
				maxLength='8'
				id='heightInput'
				name='height'
				placeholder='Input height...'
				value={props.smurf.height}
				onChange={props.change}
				style={{ marginLeft: '10px'}}
			/>
			</label>
         	<br/>
         	<Button color='success'>Add Smurf</Button>
      	</form>
   )
};

export default NewSmurfForm;
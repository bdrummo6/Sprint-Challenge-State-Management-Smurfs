import React from 'react';

import { Button } from 'reactstrap';

const NewSmurfForm = props => {

	return (
		<form onSubmit={props.submit}>
			<label htmlFor='nameInput'>Name: </label>
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

         <label htmlFor='ageInput'>Age: </label>
         <input
			type='text'
			maxLength='8'
			id='ageInput'
			name='age'
			placeholder='Input age...'
			value={props.smurf.age}
			onChange={props.change}
         />

         <label htmlFor='heightInput'>Height: </label>
         <input
            type='text'
            maxLength='8'
			id='heightInput'
			name='height'
			placeholder='Input height...'
			value={props.smurf.height}
			onChange={props.change}
         />
         <br/>
         <Button color='success'>Add Smurf</Button>
      </form>
   )
};

export default NewSmurfForm;
import React from 'react'
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

import { Container, Button } from 'reactstrap';

const Smurfs = props => {

	return (
		<div>
			<Container style={{ display: 'flex', width: '45%', justifyContent: 'space-evenly', marginTop: '25px'}}>
				<Button onClick={props.getData}>See Smurfs</Button>
			</Container>
			<Container>
				{props.smurfs.map(smurf => {
					return (
						<Smurf id={smurf.id} smurf={smurf}  />
					)
				})}
			</Container>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs
	}
};

export default connect(mapStateToProps, {getData})(Smurfs);
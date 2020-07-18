import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

import Smurf from './Smurf';

import { Container } from 'reactstrap';

const Smurfs = props => {

	useEffect(() => {
		props.getData();
	})

	return (
		<Container>
			<p style={{ fontSize: '1.4rem', marginTop: '15px'}}>Village Size: <strong>{props.smurfs.length}</strong></p>
			{props.smurfs.map(smurf => {
				return (
					<Smurf id={smurf.id} smurf={smurf}  />
				)
			})}
		</Container>

	)
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs
	}
};

export default connect(mapStateToProps, { getData })(Smurfs);
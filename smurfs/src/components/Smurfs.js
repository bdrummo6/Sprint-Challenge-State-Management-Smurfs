import React, { useEffect } from 'react'
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

import { Container } from 'reactstrap';

const Smurfs = props => {

	useEffect(() => {
		props.getData();
	})

	return (
		<Container>
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

export default connect(mapStateToProps, {getData})(Smurfs);
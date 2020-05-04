import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

const Smurf = props => {

	return(
		<Card>
			<CardHeader>
				<CardTitle key={props.id}>Name: {props.smurf.name}</CardTitle>
			</CardHeader>
			<CardBody>
				<ListGroup>
					<ListGroupItem>
						<ListGroupItemText>Age: {props.smurf.age}</ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem>
						<ListGroupItemText>Height: {props.smurf.height}</ListGroupItemText>
					</ListGroupItem>
				</ListGroup>
			</CardBody>
		</Card>
	)
}

export default Smurf;
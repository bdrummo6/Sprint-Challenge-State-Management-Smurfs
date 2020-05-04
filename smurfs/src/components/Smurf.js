import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

const Smurf = props => {

	return(
		<Card style={{ margin: '20px 24% 0 24%', width: '50%' }}>
			<CardHeader>
				<CardTitle id={props.id} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{props.smurf.name}</CardTitle>
			</CardHeader>
			<CardBody>
				<ListGroup>
					<ListGroupItem>
						<ListGroupItemText>Age: <strong>{props.smurf.age}</strong></ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem>
						<ListGroupItemText>Height: <strong>{props.smurf.height}</strong></ListGroupItemText>
					</ListGroupItem>
				</ListGroup>
			</CardBody>
		</Card>
	)
}

export default Smurf;
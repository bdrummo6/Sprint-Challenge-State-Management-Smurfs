import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, ListGroup, ListGroupItem, ListGroupItemText, Button } from 'reactstrap';

const Smurf = props => {
	return(
		<Card id={props.id} style={{ margin: '20px 24% 0 24%', width: '50%',  border: '2px solid #000000' }}>
			<CardHeader>
				<CardTitle style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '20px' }}>{props.smurf.name}</CardTitle>
			</CardHeader>
			<CardBody>
				<ListGroup>
					<ListGroupItem style={{ border: '1px solid #000000' }}>
						<ListGroupItemText style={{ fontSize: '1.2rem', marginTop: '20px'}}>Age: <strong>{props.smurf.age}</strong></ListGroupItemText>
					</ListGroupItem>
					<ListGroupItem style={{ border: '1px solid #000000' }}>
						<ListGroupItemText style={{ fontSize: '1.2rem', marginTop: '20px'}}>Height: <strong>{props.smurf.height}</strong></ListGroupItemText>
					</ListGroupItem>
				</ListGroup>
			</CardBody>
			<Button color='danger' style={{ color: 'white', fontWeight: 'bold', width: '40%', margin: '0 30% 20px 30%'}}>Delete Smurf</Button>
		</Card>
	)
}

export default Smurf;
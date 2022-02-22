import React from 'react';
import {useNavigate} from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import './ForestCard.css'

function ForestCard(props) {

	let navigate = useNavigate();

	function handleClick(forest) {
		navigate(forest.split(' ').join('-').toLowerCase());
	}

	return(
		<Card className="forest-card" onClick={() => handleClick(props.name)}>
		  <Card.Img className="forest-card-img" variant="top" onError={(e) => e.target.src = "/images/default.jpg"} src={"/images/"+props.image}/>
		  <Card.Body>
		    <Card.Title>{props.name}</Card.Title>
		    <Card.Subtitle className="mb-2 text-muted">{props.type}</Card.Subtitle>
		    <Card.Text>
		      {props.descShort}
		    </Card.Text>
		  </Card.Body>
		</Card>
	)
}

export default ForestCard;
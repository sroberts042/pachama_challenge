import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import AppWrapper from './AppWrapper';

import './Forest.css';

function Forest(props) {
  let navigate = useNavigate();

  const [forest, setForest] = useState({});

  useEffect(() => {
    getForest();
  });

  const getForest = () => {
    axios.get('http://localhost:9096/forests/'+props.id,
      {headers:
        {'Access-Control-Allow-Origin': '*'}
      })
    .then((response) => {
      setForest(response.data);
    })
    .catch(error => console.log(error))
  }

  const healthData = (health) => {
    if (!health) {
      return <div>Data unavailable</div>
    }
    console.log(health, typeof(health))
    let healthJson = health ? JSON.parse(health) : null;
    console.log(healthJson)
    let healthDiv = healthJson ? 
      <div>
        <div>Carbon stored: {healthJson['stored']}</div>
        <div>Change over last 30 days: {healthJson['change']}</div>
      </div> : 
      <div>{health}</div>
    return healthDiv;
  }

	return(
		<AppWrapper title={forest.name}>
      <Button variant="link" style={{'float': 'right'}} onClick={() => navigate('/')}>Return to home</Button>
      <div className="forest">
        <img onError={(e) => e.target.src = "/images/default.jpg"} src={"/images/"+forest.thumbnail_filename} alt="Forest" className="forest-img"/>
        <div className="forest-details">
    			<div>Type: {forest.forest_type}</div>
          <div>Country: {forest.country}</div>
    			<div>Location: {forest.location}</div>
    			<div>Area: {forest.area} ha</div>
        </div>
      </div>
      <div className="about">
        <h3>About</h3>
			  <div>{forest.long_description}</div>
      </div>
      <div className="health">
        <h3>Health</h3>
        <div>{healthData(forest.health_metrics)}</div>
      </div>
		</AppWrapper>
	)
}

export default Forest;
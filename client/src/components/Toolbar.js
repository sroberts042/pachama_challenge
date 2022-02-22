import React from 'react';

import { Navbar, Container } from 'react-bootstrap';

import './Toolbar.css'

function Toolbar(props) {

	return(
	  <Navbar variant="dark" bg="dark" expand="lg" className="py-4">
		  <Container>
		    <Navbar.Brand href="/">
		    	<img className="logo" alt="Pachama"/>
		    </Navbar.Brand>
		    <h3 style={{"color":"white"}}>{props.title}</h3>
		    <div/>
		  </Container>
		</Navbar>
	);
}

export default Toolbar;
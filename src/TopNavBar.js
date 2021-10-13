import React from 'react'
import { Navbar,Container ,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainLogo from './component/ravi.svg'
import cv from './component/cv.pdf'

// import {Link} from 'react-router-dom'
// import rewdigital_toggle_buttoon from "./images/rewdigital_toggle_buttoon.svg"
function TopNavBar() {

 

 
    return (<>

<Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
  <Container>
  <Navbar.Brand to="/"><img style={{width:"39px",height:"auto"}} src={mainLogo} alt="logo"  /></Navbar.Brand>
  
<Navbar.Toggle aria-controls="basic-navbar-nav">
  {/* <img style={{width:"39px",height:"auto"}} src={rewdigital_toggle_buttoon} alt="logo" srcset="" /> */}
   </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">

     

    </Nav>
    
    <Nav>
      <Nav.Link  href="#/">Home</Nav.Link>
      <Nav.Link href="#/works">Works</Nav.Link>
      <Nav.Link href="#/Projects">Projects</Nav.Link>
      <Nav.Link href={cv}>CV</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        


   </> )
}

export default TopNavBar

import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css';
import {NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const NavBar = () => {
    return(
        <>
        <Navbar bg="light" variant="light">
            
    <Container className="nav-container">
    {/* <Navbar.Brand href="#home">Ritik Dubey</Navbar.Brand> */}
   
    <Nav className="me-auto nac">    
     
      <div><NavLink to="/home" className="navbar-text"> <HomeIcon fontSize="large" color='primary'></HomeIcon>Home</NavLink></div>
      <div><NavLink to="/contact" className="navbar-text"><ContactPageIcon fontSize="large" color='primary'></ContactPageIcon>Contact</NavLink></div>
      
      <div style={{'marginLeft': '30px'}}>
      <a target="_blank" href="https://www.linkedin.com/in/ritik-dubey-a148421b2/"><LinkedInIcon fontSize="large"  color="primary" /></a>
      <a target="_blank" href="https://github.com/ritikdubey"><GitHubIcon fontSize="large" style={{'marginLeft': '15px'}} color="primary" /></a>

      
      </div>
    </Nav>
  
    </Container>
  </Navbar>
  
    </>
    )
}

export default NavBar;
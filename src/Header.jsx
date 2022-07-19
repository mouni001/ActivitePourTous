import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container} from 'react-bootstrap';
import videoBg from './videoBg.mp4'
import {  Link } from "react-router-dom";

const Header = () => {

  return (
    <div className='header'>
      <Navbar bg="light" variant="">
        <Container>
          <Navbar.Brand to='/Home' >Activités pour tous!</Navbar.Brand>
          <Nav className="me-auto">
            <a className="headerlink" href='/'>Accueil</a>
            <a className="headerlink" href='./Activities'>Activités</a>
           <a className="headerlink" href='./Reservation'>Réservation</a>
            <a className="headerlink" href='./Commentaire'>Commentaire</a>
          </Nav>
        </Container>
      </Navbar>
      
    </div> 
  )
}

export default Header
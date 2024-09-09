import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavLink } from 'react-bootstrap';
// import useAuth from '../../Hook/useAuth';
import useAuth from "../../Hooks/useAuth";
import './Navbar.css';

const NavbarPage = () => {
  const { logout, user } = useAuth();

  const handleLogout = async()=>{
    await logout()
  }

  return (

<div className="topbar" style={{ paddingTop:".5%"}}>
 
<ul className="nav" style={{color: 'white', marginBottom: '100px'}}>
      <li class="nav-item">
      <Link class="nav" to={"/merchantcorner"}>Merchant Corner</Link>
      </li>
      <li class="nav-item">     
      <Link class="nav" to={"/complain"}>Complain & Suggestion</Link>
      </li>
      <li class="nav">
          <a class="nav" href="">Track Order</a>
      </li>
      <li class="nav-item">
          <a class="nav" href="">Login</a>
      </li>
      <li class="nav-item">
          <a class="nav" href="">বাংলা</a>
      </li>
      <li class="nav-item">
          <a class="nav" href="">ENG</a>
      </li>
  </ul>
  
</div >

  );
};

export default NavbarPage;
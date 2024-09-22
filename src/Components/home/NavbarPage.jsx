import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Button, NavLink } from 'react-bootstrap';
// import useAuth from '../../Hook/useAuth';
import useAuth from "../../Hooks/useAuth";
import './Navbar.css';

const NavbarPage = () => {
  const { logout, user } = useAuth();

  const handleLogout = async()=>{
    await logout()
  }

  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  

  return (

<div className="topbar" style={{ paddingTop:".5%"}}>
 
<ul className="nav" style={{color: 'white', marginBottom: ''}}>
      <li className="nav-item">
      <Link className="nav" to={"/merchantcorner"}>Merchant Corner</Link>
      </li>
      <li className="nav-item">     
      <Link className="nav" to={"/complain"}>Complain & Suggestion</Link>
      </li>
      <li className="nav dropdown">
          <a className="nav" href="">Track Order</a>
      </li>
      

      {!user && (
          <>
            {/* <li><Link to={"/login"}>Login</Link></li> */}
            {/* <li><Link to={"/register"}>Register</Link></li> */}
            <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Login
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#action1">A</a></li>
          <li><a href="#action2">A</a></li>
          <li><a href="#action3">S</a></li>
        </ul>
      )}
    </div>
          </>
        )}
        {user && (
          <div style={{ backgroundColor: 'blue' }} className="overflow-hidden mr-2 pl-2 px-auto h-6 flex justify-center">
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
          </div>
        )}
      
     

      <li className="nav-item">
          <a className="nav" href="">বাংলা</a>
      </li>
      <li className="nav-item">
          <a className="nav" href="">ENG</a>
      </li>
      {user && (
       
       <div className="avatar">
       <div className="w-6 h-6 rounded-full border-2 border-black overflow-hidden mr-2">
         <img src={user?.photoURL || "/placeholder.jpg"} alt="User Avatar" className="w-full h-full object-cover" />
       </div>
       <div>
       <button onClick={handleLogout} className="btn bg-red-500 text-white btn-xs pb-2" style={{height: '00%'}}>Logout</button>
     </div>
     </div>
     )}
  </ul>

      
</div >

  );
};

export default NavbarPage;
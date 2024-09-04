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
    
   <>
    {/* <div className="navbar bg-base-100 flex justify-between items-center px-4 lg:px-8 py-2">
    <div className="flex items-center">
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"//merchantcorner"}>About</Link></li>
          {!user && (
            <>
              <li><Link to={"/login"}>Login</Link></li>
              <li><Link to={"/register"}>Register</Link></li>
            </>
          )}
          {user && (
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
          )}
          {user && (
            <li>
              <button onClick={handleLogout} className="btn bg-red-500 text-white">Logout</button>
            </li>
          )}
        </ul>
      </div>
      <a href="/" className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">Keyboard world</a>
    </div>
    <div className="hidden lg:flex items-center space-x-2">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={"/"}>Home</Link></li>
       
        {!user && (
          <>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
          </>
        )}
        {user && (
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
        )}
      </ul>
      {user && (
        <button onClick={handleLogout} className="btn bg-red-500 text-white">Logout</button>
      )}
      <div className="avatar">
        <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden">
          <img src={user?.photoURL || "/placeholder.jpg"} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div> */}
 

<div className="topbar" >
 
<ul className="nav  " style={{color: 'white', marginBottom: '100px'}}>
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
</>
  );
};

export default NavbarPage;
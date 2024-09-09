import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, NavLink } from "react-bootstrap";
// import useAuth from '../../Hook/useAuth';
import "./Header.css";
// import Usefirebase from '../../Hook/Usefirebase';
//import { Box } from '@mui/system';
import a from "./../../assets/ad-logo.png";

const Header = () => {
  return (
    <div className="container-header">
  <div className="row">
    <div className="col-lg-2 col-md-2 col-12">
      <div className="logo">
        <a href="/">
          <img className="img-fluid w-auto" src={a} alt="" />
        </a>
      </div>
    </div>

    <div className="col-lg-8 col-md-7 col-12">
      <div className="search-bar-top">
        <div className="search-bar">
          <form>
            <input
              name="search"
              placeholder="Search Product"
              id="txtName"
              className=""
              autoComplete="off"
              style={{ width: "100%" }}
            />
            <button
              type="button"
              className="btn-header"
              //onClick={SearchLocation}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div
      className="col-lg-2 col-md-3 col-12 d-flex justify-content-end text-align"
      style={{ position: "relative" }}
    >
      <div className="right-bar">
        <a href="" className="single-icon">
          <img
            src="https://static.ajkerdeal.com/images/desktop-home/cart.svg"
            alt="image"
          ></img>
          <span className="total-count" id="total-count">
            o
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Header;

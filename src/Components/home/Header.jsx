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
    <div className="">
      <div className="middle-inner">
        <div className="container-header">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              <div className="logo">
                <a href="http://localhost:5173/">
                  <img className="img-fluid w-40" src={a} alt="" />
                </a>
              </div>

              <div className="search-top">
                <div className="top-search">
                  <a href="#0">
                    <i className="ti-search"></i>
                  </a>
                </div>
                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search Product" />
                    <button value="search" type="submit">
                      hhh
                    </button>
                    <i className="ti-search">::before</i>
                    <i class="fas fa-cloud"></i>
                    
                  </form>
                </div>
                <div className="mobile-nav"></div>
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
                      className="ui-autocomplete-input"
                      autoComplete="off"
                      style={{ width: "100%" }}
                    />
                    <button
                      type="button"
                      className="btnn-header"
                      //onClick={SearchLocation}
                    >
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
        
            
          </div>
          <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                <div className="sinlge-bar shopping">
                  <a href="" className="single-icon">
                    <img
                      src="https://static.ajkerdeal.com/images/desktop-home/cart.svg"
                      style={{ width: 60 }}
                      alt=""
                    ></img>
                    <span
                      style={{ marginRight: "2.5rem" }}
                      className="total-count"
                      id="total-count"
                    >
                      o
                    </span>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

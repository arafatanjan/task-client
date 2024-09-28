import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { Button, NavLink } from 'react-bootstrap';
// import useAuth from '../../Hook/useAuth';
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarPage = () => {
  const { signIn, logout, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //console.log(email, password);

    await signIn(email, password);
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate(from, { replace: true });
  //   }
  // }, [user, from, navigate]);

  const handleLogout = async () => {
    await logout();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar" style={{ paddingTop: ".5%" }}>
      <ul className="nav" style={{ color: "white", marginBottom: "" }}>
        <li className="nav-item">
          <Link className="nav" to={"/merchantcorner"}>
            Merchant Corner
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav" to={"/complain"}>
            Complain & Suggestion
          </Link>
        </li>
        <li className="nav">
          <a className="nav" href="/booking">
            Track Order
          </a>
        </li>

        {!user && (
          <>
            {/* <li><Link to={"/login"}>Login</Link></li> */}
            {/* <li><Link to={"/register"}>Register</Link></li> */}
            <form onSubmit={handleSUbmit}>
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                  style={{ fontSize: "medium" }}
                >
                  Login
                </button>
                {isOpen && (
                  <ul
                    className="dropdown-menu"
                    style={{ listStyleType: "none", padding: 0 }}
                  >
                    <li>
                      <div
                        style={{
                          width: "200px",
                          margin: "0 auto",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                            style={{
                              width: "90%",
                              padding: "2px",
                              margin: "5px 5px 5px  0px",
                              boxSizing: "border-box",
                              border: "1px solid #ccc",
                              borderRadius: "3px",
                            }}
                          />
                        </div>

                        {/* Password Input */}
                        <div>
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            style={{
                              width: "90%",
                              padding: "2px",
                              margin: "0px 5px 5px  0px",
                              boxSizing: "border-box",
                              border: "1px solid #ccc",
                              borderRadius: "3px",
                            }}
                          />
                        </div>

                     
                        <div>
                          <button
                            style={{
                              width: "90%",
                              padding: "5px",
                              margin: "4px 5px 5px  5px",
                              backgroundColor: "#d3d3d3",
                              border: "none",
                              cursor: "pointer",
                              marginBottom: "10px",
                              color: "black",
                            }}
                          >
                            LOGIN
                          </button>
                        </div>

                        <div className="">
                          <a
                            href="#"
                            style={{
                              color: "blue",
                              textDecoration: "none",

                              padding: "0",
                              marginLeft: "8px",
                              lineHeight: "1",
                              fontSize: "medium",
                              fontWeight: "",
                              textAlign: "left",
                            }}
                          >
                            Forgot Password?
                          </a>
                        </div>

                        <div
                          style={{
                            textAlign: "left",
                            paddingLeft: "8px",
                            fontSize: "medium",
                            fontWeight: "500",
                          }}
                        >
                          <p>
                            <a
                              href="/merchantcorner"
                              style={{
                                display: "inline-block",
                                padding: "0",
                                marginTop: "2px",
                                lineHeight: "2",
                              }}
                            >
                              Register
                            </a>
                          </p>
                          <p style={{ margin: "0", lineHeight: "1" }}>
                            <a
                              href="#"
                              style={{
                                padding: "0",
                                margin: "0",
                                lineHeight: "2",
                              }}
                            >
                              How To Place Order?
                            </a>
                          </p>
                          <p style={{ marginLeft: "2px", lineHeight: "1" }}>
                            <a
                              href="#"
                              style={{
                                display: "inline-block",
                                padding: "0",
                                marginBottom: "5px",
                                lineHeight: "2",
                              }}
                            >
                              Refund Policy
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </form>
          </>
        )}
        {user && (
          <div
            style={{ backgroundColor: "blue" }}
            className="overflow-hidden mr-2 pl-2 px-auto h-6 flex justify-center"
          >
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </div>
        )}

        <li className="nav-item">
          <a className="nav" href="">
            বাংলা
          </a>
        </li>
        <li className="nav-item">
          <a className="nav" href="">
            ENG
          </a>
        </li>
        {user && (
          <div className="avatar">
            <div className="w-6 h-6 rounded-full border-2 border-black overflow-hidden mr-2">
              <img
                src={user?.photoURL || "/placeholder.jpg"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="btn bg-red-500 text-white btn-xs pb-2"
                style={{ height: "00%" }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavbarPage;

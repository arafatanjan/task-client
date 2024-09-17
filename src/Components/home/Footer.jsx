import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{background: 'Black'}}>
      <div className="last-container">
      <div className="col">
          <h5>Customer Care</h5>
          <h6>Help Center </h6>
          <h6>How to place order? </h6>
          <h6>Track Order </h6>
          <h6>Return and Refund Policy</h6>
          <h6>Privacy Policy </h6>
          <h6>Replacement Policy </h6>
          <h6>Contact Us </h6>

      </div>
      <div className="col">
          <h5>AjkerDeal</h5>
          <h6>AjkerDeal Blog</h6>
          <h6>SiteMap </h6>
          <h6>Suggestions And Complains</h6>
          <h6>Instant Payment</h6>
      </div>
      <div className="col">

      </div>
      <div className="col">
          <h5>Newsletter</h5>
          <h5>Everyday more than 1000 products are added in </h5>
          <h5>ajkerdeal.com To get new product update subscribe now.</h5>
          <div><input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" /></div>
          <div><button className="btn btn-block">Subscribe</button></div>
          <h5>Questions    Opinion    Complain </h5>
          <h5>Email: info@ajkerdeal.com</h5>
          <h5>Inbox: https://www.facebook.com/ajkercrazydeal</h5>
      </div>
  </div>
  </div>
    );
};

export default Footer;
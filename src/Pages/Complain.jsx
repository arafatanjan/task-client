import React from 'react';
import './Complain.css'

const Complain = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // Send data to server or handle it as needed
      };

    return (
      <div style={{display: 'flex', justifyContent:'center', margin:'10% 0', backgroundColor:"#aaa9a9"}}>
        <div style={{ margin: '0 0%', border: '1px solid black', padding: '0 18%' , width:'60%'}}>
          <div className='complain-header'>মতামত/অভিযোগ</div>
      <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        {/* <label htmlFor="title">Product Title</label> */}
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          placeholder="বুকিং কোড"
          required
        />
      </div>

      <div className="form-group">
        {/* <label htmlFor="stock">Stock</label> */}
        <input
          type="text"
          id="stock"
          name="stock"
          className="form-control"
          placeholder="নাম"
          required
        />
      </div>

      <div className="form-group">
        {/* <label htmlFor="price">Price ($)</label> */}
        <input
          type="text"
          step="0.01"
          id="price"
          name="price"
          className="form-control"
          placeholder="ফোন নাম্বার"
          required
        />
      </div>

      <div className="form-group">
        {/* <label htmlFor="discount">Discount (%)</label> */}
        <input
          type="text"
          step="0.01"
          id="discount"
          name="discount"
          className="form-control"
          placeholder="মতামত/অভিযোগ"
          required
        />
      </div>

      <input type="hidden" id="email" name="email" value="your-email@example.com" />

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      </div>
      </div>
    );
};

export default Complain;
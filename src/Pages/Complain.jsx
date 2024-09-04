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
        <div style={{ margin: '100px 300px', border: '1px solid black', padding: '30px 40px' }}>
      <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="title">Product Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          placeholder="Enter product title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          className="form-control"
          placeholder="Enter stock quantity"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price ($)</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          className="form-control"
          placeholder="Enter price"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="discount">Discount (%)</label>
        <input
          type="number"
          step="0.01"
          id="discount"
          name="discount"
          className="form-control"
          placeholder="Enter discount"
          required
        />
      </div>

      <input type="hidden" id="email" name="email" value="your-email@example.com" />

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      </div>
     
    );
};

export default Complain;
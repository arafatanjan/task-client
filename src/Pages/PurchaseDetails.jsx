import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import './PurchaseDetails.css'

const PurchaseDetails = () => {
    const ball = useLoaderData();
    //console.log(ball)
      //const { brand, description, image_url, price, title } = course;
      const [title, setTitle] = useState(ball.title);
      const [name, setName] = useState('');
      const [price, setPrice] = useState(ball.price);
      const [brand, setBrand] = useState(ball.brand);
      const [quantity, setQuantity] = useState(0);
      const [id, setId] = useState(ball._id);
      const [description, setDescription] = useState(ball.description);
      const [image_url, setImageURL] = useState(ball.filename);
      const [address, setAddress] = useState(''); 
      const [contact, setContact] = useState('');
      const [showToast, setShowToast] = useState(false);
      //console.log(title)
    
      const handleSubmit = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
    
        const form = e.target;
        //const id = form.id.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const contact = form.contact.value;
        const address  = form.address.value;
    
        const data = {  name, quantity, price, contact, address };
        console.log(data)
        if (!window.confirm('Are you sure you want to place order?')) {
          return;
        }
        await fetch(`https://task-server-fawn.vercel.app/order/${ball._id}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            // authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) =>{window.location.replace(data.url);
          setShowToast(true);   
          setTimeout(() => setShowToast(false), 3000); 
          form.reset();
          } )
      };

    return (
         <div className="details-container" style={{
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1600px',
      margin: '0 auto',
      padding: '20px'
    }}>


    <div style={{
        maxWidth: '800px',
        margin: '0 20px 0 0',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        flex: 1
      }}>

    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}> {title} </h1>
    <div style={{ textAlign: 'center', marginBottom: '20px', display:'flex', justifyContent: 'center' }}>
        <img style={{ maxHeight: '300px', width: 'auto' }} src={image_url} alt="product image" />
    </div>
    <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}> $ {price} </h3>
        {/* <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#666', marginBottom: '10px' }}> {brand} </h3> */}
        <p style={{ fontSize: '1.2rem', lineHeight: '1.5', color: '#444' }}> {description} </p>
    </div>
</div>

<div style={{ maxWidth: '600px', margin:"5%", width:'30%' }}>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              className="bg-gray-100 p-2 w-full border border-black rounded-lg"
              type="text"
              name="name"
              placeholder="customer name"
              
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-2 w-full border border-black rounded-lg"
              type="number"
              name="quantity"
              placeholder="quantity"
              // value={brand}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-2 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price*quantity}
              onChange={(e) => setPrice(e.target.value)}
              disabled
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-2 w-full border border-black rounded-lg"
              type="text"
              name="contact"
              placeholder="contact No."
              // value={description}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-2 w-full border border-black rounded-lg"
              type="textarea"
              name="address"
              placeholder="customer adress"
              // value={image_url}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Pay"
            />
          </div>
        </form>
</div>
</div>
    );
};

export default PurchaseDetails;
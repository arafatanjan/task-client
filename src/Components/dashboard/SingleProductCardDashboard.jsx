
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
//import { toast } from 'react-toastify';

const SingleProductCardDashboard = ({ course, onDelete }) => {
  const { _id, title, brand, price, description, image_url } = course;
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const token = localStorage.getItem("token");

//https://assignment-server-nine-olive.vercel.app

const handleDelete = async () => {
  const token = localStorage.getItem("token");
  if (!window.confirm('Are you sure you want to delete this item?')) {
    return;
  }

  await fetch(`http://localhost:5000/courses/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data?.token); 
      
      // setToastMessage("Deleted successfully.");
      // setShowToast(true);
      // setTimeout(() => setShowToast(false),3000);
      toast.success("Product Deleted");
      onDelete(_id);
    });
};

  return (
  
    <div className="card w-96 bg-base-100 shadow-xl">
    {/* {showToast && (
        <div className="fixed top-5 right-5 toast toast-middle w-10 toast-center">
          <div className="alert alert-error">
            <span>{toastMessage}</span>
          </div>
        </div>
      )} */}
      <figure>
        <img src={image_url} alt="course" className="object-cover w-96 h-100"/>
      </figure>
      <div className="card-body p-4 justify-center">
        <div className="justify-center">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description.split(' ').slice(0, 15).join(' ')}{description.split(' ').length > 15 ? '...' : ''}</p>
        </div>
        <div className="card-actions justify-center space-x-1">
          <button className="btn bg-indigo-500 text-white flex items-center space-x-2">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
    
    
  );
};

export default SingleProductCardDashboard;


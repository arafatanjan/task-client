import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const AddProducts = () => {
   const [showToast, setShowToast] = useState(false);
   const { user } = useAuth();
      console.log(user.email)

    const handleSubmit = async (e) => {
      
      const token = localStorage.getItem("token");
      e.preventDefault();
  
      const form = e.target;
      //const id = form.id.value;
      const title = form.title.value;
      const email = form.email.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const stock = form.stock.value;
      const description = form.description.value;
      const image_url = form.image_url.value;
  
      const data = {email, title, brand, price, description, image_url, stock };
      if (!window.confirm('Are you sure you want to add this item?')) {
        return;
      }
      
      await fetch("https://task-server-fawn.vercel.app/courses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",       
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {localStorage.setItem("token", data?.token);      
          setShowToast(true);
         setTimeout(() => setShowToast(false), 3000);
          form.reset();
        });
         
    };
  
    return (
      <div className="max-w-lg mx-auto">
        <h1 className="text-5xl font-bold text-center">Add a Product</h1>
        {showToast && (
        <div className="toast toast-top toast-center">
        <div className="alert alert-info">
          <span>Added Sussessfully</span>
        </div>
      </div>
      )}
        <div className="my-16">
          <form onSubmit={handleSubmit}>
          <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="email"
                placeholder="email"
                value={user?.email}
              />
            </div> 
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>          
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Model"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="stock"
                placeholder="Stock"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
          
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddProducts;
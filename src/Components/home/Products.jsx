import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Products.css";
import Skeleton from "react-loading-skeleton";
// import Link from '../../../public/services.json';
import aru from "./../../assets/hot-deal-logo.gif";


const Products = ({}) => {
  const [data, setData] = useState([]);
  const [filterproduct, setFilterproduct] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("services.json");
      if (componentMounted) {
         setData(await response.clone().json());
         setFilterproduct(await response.json());
        setLoading(false);
        //console.log(filterproduct);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const newFilterProduct = (category) => {
    const updatedList = data.filter((x) => x.type === category);
    setFilterproduct(updatedList);
    
  };

  const ShowProducts = () => {
    const categories = [
      'Tshirt',
      'Pants',
      'Shirts',
      'Salwar',
      'Kurti',
      'Watches',
      'Polo',
      'Sharee',
      'Panjabi',
      'Shoes'
      ];

    return (
      
        <> 
          <div className=" buttons d-flex justify-content-center pb-3">
            
              {/* onClick={() => setFilterproduct(data)} */}
              {categories.map((category, index) => (
                
                <button key={index} className="tile_div" onClick={() => newFilterProduct(category)}>{category}</button>
              ))}
          </div>
         
          <div className="scroll-bar">
        {/* Scrollbar (Styled using CSS) */}
      </div>

      
          <div className="row firsthalf">

            <div className="col-md-6 col-sm-6 col-6 ">
              <div className="row ">
                {filterproduct.slice(0, 4).map((product) => {
                  return (
                    <>
                      <div className="col-lg-3 px-1 ">
                        <div className="border  text-center" key={product._id}>
                          <Link to={`/product/${product.id}`}> 
                          <img
                            src={product.filename}
                            className="card-img-left"
                            alt={product.title}
                            height=""
                          />
                          </Link>
                          <div className="card-body">
                            <p className="discounted-price">
                              <span>{product.discountedprice}</span>
                            </p>
                            <p className="regular-price">
                              <span>{product.price}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-6">
              <div className="row">
                {filterproduct.slice(4, 8).map((product, key) => {
                  return (
                    <>
                      <div className="col-lg-3 px-1 ">
                        <div className="border text-center" key={product._id}>
                        <Link to={`/product/${product.id}`}> 
                          <img
                            src={product.filename}
                            className="card-img-right"
                            alt={product.title}
                            height=""
                          />
                          </Link>
                          <div className="card-body">
                            <p className="discounted-price">
                              <span>{product.discountedprice}</span>
                            </p>
                            <p className="regular-price">
                              <span>{product.price}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>  
     
    );
  };


  return (
    //Starting
    <div className="product-container" style={{ marginTop: "20px",marginBottom: "4rem", padding:'0 7% 0 0' }}>

    <div className="">

      <div className=" logoarrow">
        
          <div className="" >
            <div className="deals-title">
              <span className="hot-deal-logo float-right" >
                <img className="img" src={aru} alt="logo" />
              </span>
            </div>
            </div>

            <div
            className=""
              style={{
                float: "right",
                marginTop: 20,
                fontSize: 16,
                textAlign: "right",
                borderBottom: "blue",
              }}
              
            >
              <a
                href=""
                style={{ height: 25, width: 75, marginTop: -3.5 }}
              >
                All
                <span
                  style={{
                    height: 20,
                    width: 15,
                    display: "inline-block",
                    overflow: "hidden",
                    borderBottom: "",
                  }}
                  className="all-arrow"
                >
                  <img
                    style={{
                      height: 15,
                      width: "100%",
                      marginTop: "-3.5%",
                      display: "inline-block",
                      borderBottom: "",
                    }}
                    src="https://static.ajkerdeal.com/images/desktop-home/arrowforall.svg"
                    alt=""
                  />
                </span>
              </a>
            </div>
          
        </div>
      

      <div className="row justify-content-center mb-3" style={{ padding:'0 5% 0 12%' }}>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
    </div>
  );
};

export default Products;

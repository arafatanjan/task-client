import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Products.css";
import Skeleton from "react-loading-skeleton";
// import Link from '../../../public/services.json';
import aru from "./../../assets/hot-deal-logo.gif";


const Products = ({}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("services.json");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
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

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.type === cat);
    setFilter(updatedList);
    
  };

  const ShowProducts = () => {

    return (
      <div>
        <div className="container">
          <div className="buttons d-flex justify-content-center pb-3">
            <button
              className="tile_div"
              // onClick={() => setFilter(data)}
              onClick={() => filterProduct("tshirt")}
            >
              T-Shirts
            </button>
            {/* <button type="button" className="min-h-1 px-3 py-0 text-xs font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Extra small</button> */}
            <button
              className="tile_div "
              onClick={() => filterProduct("Pants")}
            >
              Pants
            </button>
            <button
              className="tile_div "
              onClick={() => filterProduct("Shirts")}
            >
              Shirts
            </button>
            <button
              className="tile_div"
              onClick={() => filterProduct("Salwar")}
            >
              Salwar Kameez
            </button>
            <button
              className="tile_div"
              onClick={() => filterProduct("Kurti")}
            >
              Kurti
            </button>
            <button
              className="tile_div"
              onClick={() => filterProduct("Watches")}
            >
              Watches
            </button>
            <button
              className="tile_div "
              onClick={() => filterProduct("Polo")}
            >
              Polo Shirts
            </button>
            <button
              className="tile_div "
              onClick={() => filterProduct("Sharee")}
            >
              Sharee
            </button>
            <button
              className="tile_div "
              onClick={() => filterProduct("Panjabi")}
            >
              Panjabi
            </button>
            <button
              className="tile_div"
              onClick={() => filterProduct("Shoes")}
            >
              Shoes
            </button>
          </div>
         

          <div className="row">
            <div className="col-md-6 ">
              <div className="row">
                {filter.slice(0, 4).map((product) => {
                  return (
                    <>
                      <div className="col-md-3 px-1">
                        <div className="border h-100 text-center" key={product._id}>
                          <img
                            src={product.filename}
                            className="card-img-top"
                            alt={product.title}
                            height="124px"
                          />
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

            <div className="col-md-6 ">
              <div className="row">
                {filter.slice(4, 8).map((product) => {
                  return (
                    <>
                      <div className="col-md-3">
                        <div class="border h-100 text-center" key={product._id}>
                          <img
                            src={product.filename}
                            className="card-img-top"
                            alt={product.title}
                            height="124px"
                          />
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
        </div>  
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center">
    <div className="" style={{ marginTop: "20px",marginBottom: "4rem", minWidth:'1250px', padding:'0px 0rem' }}>
      <div className="row" style={{ marginBottom: "1rem"}}>
        <div>
          <div>
            <div className="deals-title">
              <span className="hot-deal-logo" style={{ height: '50px' }}>
                <img className="img" src={aru} alt="" />
              </span>
            </div>

            <div
            className="d-flex justify-content-end"
              style={{
                float: "right",
                marginTop: 20,
                fontSize: 16,
                textAlign: "right",
                borderBottom: "darkorange",
              }}
              
            >
              <a
                href="https://ajkerdeal.com/flash/allflashdeals.aspx"
                style={{ height: 25, width: 75, marginTop: -3.5 }}
              >
                All
                <span
                  style={{
                    height: 20,
                    width: 15,
                    display: "inline-block",
                    overflow: "hidden",
                  }}
                  className="all-arrow"
                >
                  <img
                    style={{
                      height: 15,
                      width: "100%",
                      marginTop: "-3.5%",
                      display: "inline-block",
                    }}
                    src="https://static.ajkerdeal.com/images/desktop-home/arrowforall.svg"
                    alt=""
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
    </div>
  );
};

export default Products;

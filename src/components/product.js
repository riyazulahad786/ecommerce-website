import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
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
    getProduct();
  }, []);

  const Loading = () => {
    return( <>
    <div className=" col-md-3">
    <Skeleton count={350} />
    </div>
    <div className=" col-md-3">
    <Skeleton count={350} />
    </div>
    <div className=" col-md-3">
    <Skeleton count={350} />
    </div>
    <div className=" col-md-3">
    <Skeleton count={350} />
    </div>
       
    </>);
  };

  const filterProduct=(category)=>{
       const updateList = data.filter((i)=>i.categorys===category);
       setFilter(updateList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center py-3">
          <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter("All")}}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter(" Mens Collections")}}>
            Mens Collections
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter(" Womens Collections")}}>
            Womens Collections
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter("Jewellarys")}}>Jewellarys</button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p class="card-text lead fw-bold">${product.price}</p>
                  <a href="/" class="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container py-5 my-5">
      <div className="row  ">
        <div className="col-12 mb-5">
          <h1 className="display-6 text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

import React from "react";
import Product from "./product";

export default function Home() {
  return (
    <div>
      <div className="card text-bg-dark text-white ">
        <img
          src="https://wallpaperaccess.com/full/279547.jpg"
          className="card-img"
          alt="background"
          height="550px "
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3">New Season Arrivals</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS!...</p>
          </div>
        </div>
      </div>
      <Product/>
    </div>
  );
}

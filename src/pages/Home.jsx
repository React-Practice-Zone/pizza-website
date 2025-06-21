import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import pizzaImage from "../assets/pizza.jpeg";

export function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${pizzaImage})` }}>
      <div className="headerContainer">
        <h1 style={{ margin: `0px 0px 80px` }}> Pedro's Pizzeria </h1>
        <p style={{ margin: `0px 0px 40px` }}> PIZZA TO FIT ANY TASTE </p>
        <Link to={"/menu"}>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

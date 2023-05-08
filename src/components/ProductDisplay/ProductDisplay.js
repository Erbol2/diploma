import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductDisplay.css"


export default function ProductDisplay({ product }) {
  if (!product) {
    return null; // Render nothing if no product is selected
  }

  return (
    <div className="ProductDisplay">
      <NavLink to={`/products/${product.slug}`}>
        <img src={product.picture} alt={product.name} />
      </NavLink>
      <div className="content">
        <NavLink to={`/products/${product.slug}`}>{product.name}</NavLink>
        <br />
        <span>{product.price} $</span>
      </div>
    </div>
  );
}

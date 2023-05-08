import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import "./Randomizer.css";

export default function Randomizer() {
  const { products } = useContext(AppContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelected = () => {
    const randomProduct =
      products[Math.floor(Math.random() * products.length)];
    setSelectedProduct(randomProduct);
  };

  return (
    <div className="Randomizer" >
      <ProductDisplay product={selectedProduct} />
      <i className="fa-solid fa-dice fa-2xl" onClick={handleProductSelected}></i>
      <h2>Сlick on dice to randomly select a game</h2>
    </div>
  );
}

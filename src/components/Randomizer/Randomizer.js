import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import "./Randomizer.css";

export default function Randomizer() {
  const { products } = useContext(AppContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showH2, setShowH2] = useState(true);

  const handleProductSelected = () => {
    const randomProduct =
      products[Math.floor(Math.random() * products.length)];
    setSelectedProduct(randomProduct);
    setShowH2(false);
  };

  return (
    <div className="Randomizer" onClick={handleProductSelected}>
      <ProductDisplay product={selectedProduct} />
      <i className="fa-solid fa-dice fa-2xl"></i>
      {showH2 && (
        <h2>Click on dice to randomly select a game</h2>
      )}
    </div>
  );
}

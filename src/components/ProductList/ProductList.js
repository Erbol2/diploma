import "./ProductList.css";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import { useContext } from "react";
import { AppContext } from "../../App";
export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) =>
      product.category && product.category.includes(category.id)
    )
    .map((product) => (
      <div key={product.id} className="Product">
        <NavLink to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </NavLink>
        <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
        <span>{product.price} $</span>
        <AddToCart product={product} />
        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
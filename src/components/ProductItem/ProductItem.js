import { NavLink } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product }) {
  return (
    <div className="ProductItem">
      <div className="Product">
        <div className="block_img">
          <NavLink to={"/products/" + product.slug}>
            <img src={product.picture} alt={product.name} />
          </NavLink>
        </div>
        <div className="content">
          <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
          <span>{product.price} $</span>
        </div>
      </div>
    </div>
  );
}
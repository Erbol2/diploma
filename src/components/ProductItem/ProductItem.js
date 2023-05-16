import { NavLink } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product, onLinkClick }) {
  return (
    <div className="ProductItem">
      <NavLink to={"/products/" + product.slug} onClick={onLinkClick}>
        <div className="Product">
          <div className="block_img">
            <img src={product.picture} alt={product.name} />
          </div>
          <div className="content">
            {product.name}
            <span>{product.price} $</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
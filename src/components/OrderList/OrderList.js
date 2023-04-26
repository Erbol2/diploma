import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "No orders found.";
  }

  const output = orders.map(order => {
    const cartOutput = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId);

      return (
        <li>
          {product.name}: {product.price} $
        </li>
      );
    })

    return (
      <ul className="Order">
        <li>Name: {order.name}</li>
        <li>Phone: {order.phone}</li>
        <li>Address: {order.address}</li>
        <li>Cart:
          <ol>
            {cartOutput}
          </ol>
        </li>
      </ul>
    );
  })

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}
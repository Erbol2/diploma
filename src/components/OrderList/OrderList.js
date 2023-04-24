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
        <div>
          {product.name}: {product.price} $
        </div>
      );
    })

    return (
      <div className="Order">
        <div>Name: {order.name}</div>
        <div>Phone: {order.phone}</div>
        <div>Address: {order.address}</div>
        <div>Cart: {cartOutput}</div>
      </div>
    );
  })

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}
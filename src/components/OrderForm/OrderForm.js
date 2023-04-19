import "./OrderForm.css";

export default function OrderForm() {
  return (
    <form>
      <h2>Create an order</h2>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Phohe: <input type="tel" name="phone" required />
      </label>
      <label>
        Email: <input type="email" name="email" required />
      </label>
    </form>
  );
}
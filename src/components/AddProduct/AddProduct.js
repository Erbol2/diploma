import { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function AddProduct() {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);


  if (!user || !user.isAdmin) {
    return null;
  }

  function onFormSubmit(event) {
    const data = new FormData(event.target);

    event.preventDefault();
    console.log(data.get('picture'));
  }
  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          Name: <input
            type="text"
            value={name}
            name="name"
            required
            onChange={onChangeName} />
        </label>
        <label>
          Price: <input
            type="number"
            name="price"
            step="any"
            value={price}
            min={0}
            required
            onChange={onChangePrice} />
        </label>
        <label>
          Picture: <input
            type="file"
            name="picture"
            required
            onChange={onChangePicture} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
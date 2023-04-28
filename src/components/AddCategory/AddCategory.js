import { useState } from "react";
import "./AddCategory.css";

export default function AddCategory() {
  const [category, setCategory] = useState("")

  function onChangeCategory(event) {
    setCategory(event.target.value)
  }
  function onAddCategory() {
  }

  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        placeholder="Category name"
        value={category}
        on onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>)
}
import { useState } from "react";
import "./AddCategory.css";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function AddCategory() {
  const { user } = useContext(AppContext)
  const [category, setCategory] = useState("")

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeCategory(event) {
    setCategory(event.target.value)
  }
  function onAddCategory() {
    const name = category.trim();

    if (name.length < 5) {
      alert("Please provide a category name with minimum length of 5 characters.");
      return;

    }
    addDoc(categoryCollection, {
      name: category.trim(),
      slug: category.trim()
        .replaceAll(' ', '-')
        .toLocaleLowerCase(),
    }).then(() => {
      setCategory("");
    });
  }

  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        placeholder="Category name"
        value={category}
        onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>)
}
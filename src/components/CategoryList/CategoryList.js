import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./CategoryList.css";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext)

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>{category.name}</NavLink>
      <DeleteCategory category={category} />
    </li>
  ));


  return (
    <div className="CategoryList">
      <div className="aside_nav">
        <i className="fa-solid fa-bars fa-beat fa-xl"></i>
        <h2>Categories</h2>
        <nav>
          <h3>Categories</h3>
          <ul>{output}</ul>
          <AddCategory />
        </nav>
      </div>
    </div>
  );

}
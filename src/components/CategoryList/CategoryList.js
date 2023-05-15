import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./CategoryList.css";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext)

  const output = categories.map((category) => (
    <li className="item" key={category.id}>
      <NavLink className="links" to={"/categories/" + category.slug}>{category.name}</NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div className="CategoryList">
      <div className={`aside_nav ${isHovered ? 'hovered' : ''}`} onMouseLeave={handleMouseLeave}>
        <i className="fa-solid fa-bars fa-beat fa-xl"></i>
        <h2>Categories</h2>
        <nav>
          <h3>Categories</h3>
          <ul>{output}</ul>
          <AddCategory />
        </nav>
      </div>
      <div className="mini_nav">
        <h3>Categories</h3>
        <ul>{output}</ul>
      </div>
    </div>
  );

}
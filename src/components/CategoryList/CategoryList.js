import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./CategoryList.css";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name));

  const output = sortedCategories.map((category) => (
    <li className="item" key={category.id}>
      <NavLink className="links" to={"/categories/" + category.slug}>{category.name}</NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  const [isMiniNavVisible, setIsMiniNavVisible] = useState(false);

  const handleMiniNavClick = () => {
    setIsMiniNavVisible(!isMiniNavVisible);
  };

  return (
    <div className="CategoryList">
      <div className={`aside_nav ${isMiniNavVisible ? 'show' : ''}`}>
        <i className="fa-solid fa-bars fa-beat fa-xl"></i>
        <h2>Categories</h2>
        <nav>
          <h3>Categories</h3>
          <ul>{output}</ul>
          <AddCategory />
        </nav>
      </div>
      <div className={`mini_nav ${isMiniNavVisible ? 'show' : ''}`} onClick={handleMiniNavClick}>
        <h3>Categories</h3>
        <ul>{output}</ul>
      </div>
    </div>
  );
}

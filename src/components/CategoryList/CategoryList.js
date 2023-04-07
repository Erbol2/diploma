import { NavLink } from "react-router-dom";

import "./CategoryList.css";
const categories = [
  { id: 1, name: "Action", slug: "action" },
  { id: 2, name: "Shooter", slug: "shooter" },
  { id: 3, name: "Arcade", slug: "arcade" },
  { id: 4, name: "Slasher", slug: "slasher" },
  { id: 5, name: "Warrior", slug: "warrior" },
  { id: 6, name: "Adventure", slug: "adventure" },
];

const output = categories.map((category) => (
  <li key={category.id}>
    <NavLink to={"/categories/" + category.slug}>{category.name}</NavLink>
  </li>
));



export default function CategoryList() {
  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  );

}
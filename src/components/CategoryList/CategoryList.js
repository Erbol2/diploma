import { getDocs } from "firebase/firestore/lite"
import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { categories } from "../../firebase";
import { useState } from "react";
import { useEffect } from "react";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    getDocs(categories).then(snapshot => {
      const newCategoryList = [];
      snapshot.docs.forEach(doc => {
        const category = doc.data();
        category.id = doc.id;

        newCategoryList.push(category);

      })
      setCategoryList(newCategoryList);
    });
  }, []);

  // const categories = [
  //   { id: 1, name: "Action", slug: "action" },
  //   { id: 2, name: "Shooter", slug: "shooter" },
  //   { id: 3, name: "Arcade", slug: "arcade" },
  //   { id: 4, name: "Slasher", slug: "slasher" },
  //   { id: 5, name: "Warrior", slug: "warrior" },
  //   { id: 6, name: "Adventure", slug: "adventure" },
  // ];

  const output = categoryList.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>{category.name}</NavLink>
    </li>
  ));



  return (
    <div className="CategoryList">
      <i class="fa-solid fa-bars fa-beat"></i>
      <nav>
        <h3>Categories</h3>
        <ul>{output}</ul>
      </nav>
    </div>
  );

}
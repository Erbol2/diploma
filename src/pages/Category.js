import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");



  const categories = [
    { id: 1, name: "Action", slug: "action" },
    { id: 2, name: "Shooter", slug: "shooter" },
    { id: 3, name: "Arcade", slug: "arcade" },
    { id: 4, name: "Slasher", slug: "slasher" },
    { id: 5, name: "Warrior", slug: "warrior" },
    { id: 6, name: "Adventure", slug: "adventure" },
    { id: 7, name: "Strategy", slug: "strategy" },
  ];
  const category = categories.find(
    (category) => category.slug === params.slug);

  if (!category) {
    return <NotFound />
  }
  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}
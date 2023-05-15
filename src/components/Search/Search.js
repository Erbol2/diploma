import { useContext, useState } from "react";
import { AppContext } from "../../App";
import ProductItem from "../ProductItem/ProductItem";
import "./Search.css";

export default function Search() {
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredProducts.slice(0, 5));
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a game"
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && searchResults.length === 0 && (
        <div className="NoResults">No results found</div>
      )}
      <div className="SearchResults">
        {searchResults.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

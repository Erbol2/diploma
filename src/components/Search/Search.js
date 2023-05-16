import { useEffect, useContext, useState, useRef } from "react";
import { AppContext } from "../../App";
import ProductItem from "../ProductItem/ProductItem";
import "./Search.css";

export default function Search() {
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Search" ref={searchRef}>
      <input
        type="text"
        placeholder="Search for a game"
        value={searchTerm}
        onChange={handleSearch}
      />
      <span>
        <i className="fa-solid fa-magnifying-glass searcher"></i>
      </span>
      {searchTerm && searchResults.length === 0 && (
        <div className="NoResults">No results found</div>
      )}
      <div className="SearchResults">
        {searchResults.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onLinkClick={handleLinkClick}
          />
        ))}
      </div>
    </div>
  );
}

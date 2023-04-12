import "./ProductList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
 
export default function ProductList () {
const { products } = useContext(AppContext)

  return (
    <div className="ProductList">

    </div>
  )
}
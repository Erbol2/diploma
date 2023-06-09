import { useContext } from "react";
import { AppContext } from "../../App";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../firebase";
import "./DeleteProduct.css";

export default function DeleteProduct({ product }) {
  const { user } = useContext(AppContext);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onDeleteClick() {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    const picture = ref(storage, product.picture);
    deleteObject(picture)
      .then(() => {
        deleteDoc(doc(db, "products", product.id));
      })
      .catch((error) => {
        console.log("Failed to delete product image:", error);
        alert("Failed to delete product image. Please try again.");
      });
  }

  return (
    <span className="DeleteProduct" onClick={onDeleteClick}>
      <i className="fa-solid fa-xmark fa-lg" style={{ color: "#FFBA20" }}></i>
    </span>
  );
}
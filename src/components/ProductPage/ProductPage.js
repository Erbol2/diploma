import { useMatch } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../App";
import NotFound from "../../pages/NotFound";
import "./ProductPage.css";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductPage() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);


  const product = products.find(product => product.slug === params.slug)
  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="ProductPage">
      <div>
        <h1>{product.name}</h1>
        <div className="video_block">
          <video
            width="100%"
            controls
            muted
            autoPlay={true}
            loop
          >
            <source src={product.video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="content">
        <div className="img_block">
          <img src={product.picture} alt={product.name} />
        </div>
        <p className="description">{product.description}</p>
        <div className="addToCart">
          <span>{product.price} $</span>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  )
}

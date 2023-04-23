import { useContext } from "react"
import { useMatch } from "react-router"
import { AppContext } from "../App"
import NotFound from "./NotFound"

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug)
  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <video width="500" height="300" controls="controls">
        <source src={product.video} type="video/mp4"/>
      </video>
      <img style={{width: 450}} src={product.picture} alt={product.name} />
      <span>{product.price}</span>
    </div>
  )
}
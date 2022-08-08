import { Link } from "react-router-dom";
import "../styles/productDetails.css"
const ProductDetails = ({product}) => {
    return ( 
     <div className="container-product-details">
           <img src={product.picture}/>
           <div id="details">
            <h4>{product.marque}</h4>
            <h4>{product.price}$</h4>
           </div>
           <div className="see-details-btn">
           <a href={`/product/${product._id}`}>
           <button >See details</button>
           </a>
           </div>
    </div> );
}
 
export default ProductDetails;
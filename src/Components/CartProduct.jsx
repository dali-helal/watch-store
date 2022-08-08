import {FaTrash } from "react-icons/fa"
import {incrementQuantity,decrementQuantity,removeSelectedProduct} from "../redux/actions/ProductsActions"
import { useDispatch ,useSelector} from "react-redux";
import "../styles/cartProducts.css"
const CartProduct = ({id ,marque, picture , price , quantity}) => {

     const dispatch=useDispatch()
     function incrementProduct()
     {
       dispatch(incrementQuantity(id));
     }
   
     function decrementProduct()
     {
       dispatch(decrementQuantity(id));
     }
     const deleteProduct=()=>{
        dispatch(removeSelectedProduct(id))
     }
    return (
        <>
        <div className="product-card">
            <img src={picture} />
            <div className="container-product">
            <h4>{marque}</h4>
            <div  className="quantity-product">
                <div className="icon-sub" style={{cursor:"pointer"}} onClick={decrementProduct}>
                    -
                </div>
                <p>{quantity}</p>
                <div className="icon-sub" style={{cursor:"pointer"}} onClick={incrementProduct}>
                    +
                </div>

            </div>

            <h5>{price}TND</h5>
            </div>
           
            <FaTrash  onClick={deleteProduct} style={{cursor:"pointer"}} className="icon-Trash" size={"30px"}/>
        </div></>
           
   
     );
}

export default CartProduct;
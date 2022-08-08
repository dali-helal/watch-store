import Navbar from './Navbar';
import CartProduct from "./CartProduct.jsx"
import {useSelector} from "react-redux"
import { FaSearch, FaTimes } from "react-icons/fa"
import "../styles/cart.css"
const Cart = () => {
    const data=useSelector((state)=>state.allProducts.products)
    const priceTotale=useSelector((state)=>state.allProducts.totalPrice)
    return (  
          <section className='panier'>
            <Navbar/>
            <div className="container-mobile">
             <div className="search">
               <FaSearch className='icon-search' size={20} />
                <input type="text" placeholder="search for products" />
               </div>
             </div>
             <div className='main'>
                <div className='gridContainer'>
                {  data && data.map((product,index)=>(
                <CartProduct
                 quantity={product.quantity} 
                 price={product.price}
                 id={product.id}
                 picture={product.picture}
                 marque={product.marque}
                 key={index}/>
                 
               ))}
                </div>
             <div className='total-panier'>
                <h6>Total</h6>
                <h5>{priceTotale}TND</h5>
                <button>checkout </button>
             </div>
 
             </div>
          </section>
       
    );
}
 
export default Cart;
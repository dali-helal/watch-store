import Navbar from './Navbar';
import CartProduct from "./CartProduct.jsx"
import { useSelector } from "react-redux"
import { FaSearch, FaTimes } from "react-icons/fa"
import { useEffect, useState } from "react"
import "../styles/cart.css"
const Cart = () => {
   const data = useSelector((state) => state.allProducts.products)
   const priceTotale = useSelector((state) => state.allProducts.totalPrice)
   const [products, setData] = useState([])
   const [itemSearch, setItemSearch] = useState('')
   const [filteredData, setFilteredData] = useState([]);
   const fetchData = async () => {
      const res = await fetch('https://watch-store-react-js.herokuapp.com/api/watch')
      const json = await res.json()
      setData(json)
   }
   useEffect(() => {
      fetchData()
   }, [])
   const handleFilter = (event) => {
      const serachWord = event.target.value
      setItemSearch(serachWord)
      const newFilter = products.filter((product) => {
         if (product.marque.toLowerCase().includes(itemSearch.toLowerCase())) {
            return product
         }
      })
      if (serachWord === "") {
         setFilteredData([])
      }
      else {
         setFilteredData(newFilter)
      }
   }
   const clearInput = () => {
      setFilteredData([]);
      setItemSearch("");
   };
   return (
      <section className='panier'>
         <Navbar />
         <div className='contaier-cart-search'>
         <div className="search-cart">
               {filteredData.length === 0 ? (<FaSearch className='icon-search' size={20} />) : (
                  <FaTimes className='icon-search' onClick={clearInput} size={20} />
               )}
               <input type="text" placeholder="search for products" value={itemSearch} onChange={handleFilter} />
               {filteredData.length != 0 &&
               <div className="dataResultMobile-Cart">
                  {filteredData.map((product, index) => (
                     <a href={`/product/${product._id}`}>
                        <div className="Product-search" key={product._id}>
                           <img src={product.picture} />
                           <h4>{product.marque}</h4>
                           <h4>{product.price}$</h4>
                        </div>
                     </a>
                  )
                  )}
               </div>
            } 
            </div>
         </div>
            
          
         <div className='main'>
            <div className='gridContainer'>
               {data && data.map((product, index) => (
                  <CartProduct
                     quantity={product.quantity}
                     price={product.price}
                     id={product.id}
                     picture={product.picture}
                     marque={product.marque}
                     key={index} />

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
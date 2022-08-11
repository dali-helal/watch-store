import { FaSearch, FaTimes } from "react-icons/fa"
import Navbar from "./Navbar"
import "../styles/allProducts.css"
import FilterMobile from "./FilterMobile.jsx"
import FilterProducts from "./filterProducts.jsx"
import Products from "./Products.jsx"
import  ControlerCarousel from "./carousel"
import { useEffect, useState } from "react"
const AllProducts = () => {
    const handleClick=()=>{
        const element=document.querySelector('.list')
         element.classList.toggle('open')
    }
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
          const serachWord=event.target.value
          setItemSearch(serachWord)
          const newFilter=products.filter((product)=>{
             if(product.marque.toLowerCase().includes(itemSearch.toLowerCase())){
                return product
             }
          })
          if(serachWord===""){
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
    <>
     <section className="all-products">
       <Navbar />
           <div className="list">
                <div className="display">
                 <FaTimes className="icon-time" onClick={handleClick}/>
                </div>
                <FilterMobile/>
           </div>
       <div className="container-mobile">
         <button className="btn-filter-mobile"  onClick={handleClick}>Filter By </button>
         <div className="search-mobile" >
              <div className="search">
              {filteredData.length === 0 ? (<FaSearch className='icon-search' size={20} />) : (
                <FaTimes className='icon-search' onClick={clearInput} size={20} />
            )}
               <input type="text" placeholder="search for products" value={itemSearch} onChange={handleFilter}  />
              </div>
              {filteredData.length!=0 && 
            <div className="dataResultMobile">
                {filteredData.map((product,index)=>(
                     <a href={`/product/${product._id}`}>
                      <div className="Product-search" key={product._id}>
                       <img src={product.picture}/>
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
       <ControlerCarousel/>
       <div className="display-products">
        < FilterProducts/>
         <Products />
       </div>
     </section>
     </>
 
   );
 }
 
 export default AllProducts;
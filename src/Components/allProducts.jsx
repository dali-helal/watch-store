import { FaSearch, FaTimes } from "react-icons/fa"
import Navbar from "./Navbar"
import "../styles/allProducts.css"
import FilterMobile from "./FilterMobile.jsx"
import FilterProducts from "./filterProducts.jsx"
import Products from "./Products.jsx"
import ImageSilder from "./Carousel/ImageSilder"
import { silderData } from "./Carousel/silderData.js"
import  ControlerCarousel from "./carousel"
const AllProducts = () => {
    const handleClick=()=>{
        const element=document.querySelector('.list')
         element.classList.toggle('open')
    }
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
         <div className="search">
           <FaSearch className='icon-search' size={20} />
           <input type="text" placeholder="search for products" />
         </div>
       </div>
       {/*<ImageSilder sildes={silderData} />*/}
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
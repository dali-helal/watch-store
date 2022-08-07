import Navbar from "./Navbar";
import "../styles/home.css"
import Image from  '../logo/1.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails"
const Home = () => {
    const [data,setData]=useState([])
const fetchData=async()=>{
    const response=await fetch('http://localhost:4000/api/watch/FeaturedProducts')
    const json=await response.json()
    setData(json)
} 
useEffect(()=>{
    fetchData()
  },[])
    return <>
         <Navbar/>
         <div className="home-watch">
         <div className='section-home'>
         <h2>Time is money </h2>
         <h4>lorem Ipsum is simply dummy text of the printing 
         and typesetting industry. Lorem Ipsum has been the
         nd typesetting industry. Lorem Ipsum has been the
         and typesetting industry. Lorem Ipsum has been the
         nd typesetting industry. Lorem Ipsum has been the
         </h4>

         <a href="#FeaturedProducts">
             <button>
             Get started
             </button>
       
         </a>
        
         
         </div>
         <img className='img-home' src={Image}/>
     </div>
     <section className="section" id="FeaturedProducts">
            <h3>Featured Products</h3>
            <div className="grid-container">
            {data.map((product)=>(
                <ProductDetails product={product}  key={product._id}/>
            ))}
            </div>
            <Link to={"/allproducts"}>
            <button className="section-button">More Products</button>
            </Link>
            
        </section >
     </>;
}
 
export default Home;
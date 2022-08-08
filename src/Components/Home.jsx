import Navbar from "./Navbar";
import "../styles/home.css"
import Image from  '../logo/1.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails"
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa"
const Home = () => {
    const [data,setData]=useState([])
const fetchData=async()=>{
    const response=await fetch('https://watch-store-react-js.herokuapp.com/watch/FeaturedProducts')
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
        
        <div className="footer">
         
            <div>
                for more information ,Follow us on :
            </div>
            <div className="footer-icons">
                 <FaFacebook  size={"2rem"} />
                 <FaInstagram size={"2rem"}/>
                 <FaTwitter size={"2rem"}/>
                 <FaLinkedin size={"2rem"}/>
            </div>
            <div >
                Copyright  &copy; 2022 Dali Ben Helal All rights reserved  
            </div>
        </div>
     </>;
}
 
export default Home;
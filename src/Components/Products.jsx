import ProductsDetails from "./ProductDetails"
import { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import ReactPaginate from 'react-paginate'
import "../styles/products.css"
import {url} from "../api.js"
const Products = () => {
    const [products,setData] = useState([]) 
    const [isPending,setIspending]=useState(true)
    const [pageNumber,setPageNumber]=useState(0)
   const params=useSelector((state)=>state.filter.PropFilter)
    const fetchData =async() => {
            const res = await fetch(`${url}/api/watch/getProducts`,{
                method :"POST",
                headers :{"Content-Type" : "application/json"},
                body : JSON.stringify(params)
                })
            const json = await res.json()
            setData(json)
            setIspending(false)
    }
    useEffect(() => {
        fetchData()
    }, [params])
    const productsPerPage=6
    const pagesVisited=pageNumber*productsPerPage
    const pageCount=Math.ceil(products.length/productsPerPage)
    const changePage=({selected})=>{
      setPageNumber(selected)
    }
    return (
        <section className="container-pagination">
          <div className="products">
            { isPending && <div className="lds-ring"><div></div><div></div><div></div></div> }
            {products
            .slice(pagesVisited,pagesVisited +productsPerPage)
            .map((product)=>(
             <ProductsDetails product={product} key={product._id} />
            ))}
        </div>
        { !isPending && <ReactPaginate 
         previousLabel={'<'}
         nextLabel={'>'}
         pageCount={pageCount}
         onPageChange={changePage}
         containerClassName={"paginationBttns"}
         previousLinkClassName={"previousBttn"}
         nextLinkClassName={"nextbtn"}
         disabledClassName={'paginationDisabled'}
         activeClassName={"paginationActive"}
        />}
        </section >
      
    );
}

export default Products;
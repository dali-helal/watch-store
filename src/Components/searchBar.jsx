import { FaSearch, FaTimes } from "react-icons/fa"
import "../styles/searchbar.css"
import { useEffect, useState } from "react"
const SearchBar = () => {
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
        <section className="Container-search">
        <div className="searchInputs">
            {filteredData.length === 0 ? (<FaSearch className='icon-search' size={20} />) : (
                <FaTimes className='icon-search' onClick={clearInput} size={20} />
            )}
            <input type="text" placeholder="search for products..." value={itemSearch} onChange={handleFilter} />
        </div>
        {filteredData.length!=0 && 
            <div className="dataResult">
                {filteredData.map((product,index)=>(
                     <a href={`/product/${product._id}`}>
                      <div className="Product-search" key={index}>
                       <img src={product.picture}/>
                        <h4>{product.marque}</h4>
                        <h4>{product.price}$</h4>
                       </div>
                     </a>
                )
                )}
            </div>
        }
        </section>
    );
}
export default SearchBar;
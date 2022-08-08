import { FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Logo from '../logo/log1.png'
import SearchBar from "./searchBar"
import { useSelector } from "react-redux"
import "../styles/navbar.css"

const Navbar = () => {
  const nombreProducts = useSelector((state) => state.allProducts.Quantity)
  return (
    <nav>
      <div className='site-name'>
        <Link to={'/'}>
          <img src={Logo} className="logo" />
          <h3>watch store</h3>
        </Link>
      </div>
      <div className='icon'>
        <SearchBar />
        <a href='/Login'>
          <FaUser className='icons' size={"30px"} />
        </a>
        <div className='div-shop'>
          <Link to={'/cart'}>
            <FaShoppingCart className='icons' size={"33px"} />
          </Link>
          <div>{nombreProducts}</div>
        </div>
      </div>
    </nav>);
}

export default Navbar;
import {FaUser,FaShoppingCart,FaSignOutAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Logo from '../logo/log1.png'
import SearchBar from "./searchBar"
import "../styles/navbar.css"
const Navbar = () => {
    return ( <nav>
        <div className='site-name'>
            <Link to={'/'}>
            <img src={Logo} className="logo"/>
            <h3>watch store </h3>
            </Link>
        </div>
        <div className='icon'>
        <SearchBar/>
        <a href='/Login'>
        <FaUser  className='icons' size={"35px"}/>
        </a> 
        <div className='div-shop'>
        <Link to={'/cart'}>
        <FaShoppingCart className ='icons' size={"40px"}/>
        </Link>
        <div>{0}</div>
        </div>
        </div>
     </nav> );
}
 
export default Navbar;
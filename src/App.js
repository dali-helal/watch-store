import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx"
import PageProductDetails from "./Components/pageProductsDetails"
import AllProducts from "./Components/allProducts.jsx"
import Login from "./Components/Login.jsx"
import Signup from "./Components/Signup.jsx"
import Cart from "./Components/Cart.jsx"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route  index element={<Home />} />
      <Route exact path='/product/:id' element={<PageProductDetails/>} />
      <Route exact path='/allproducts' element={<AllProducts/>} />
      <Route path="/Login" element={ <Login/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

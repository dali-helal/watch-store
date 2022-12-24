import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/ProductsActions";
import "../styles/pageProductDetails.css"
import {url} from "../api.js"
const PageProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${url}/api/watch/${id}`)
    const json = await res.json()
    console.log(json)
    setData(json)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const addProductToCart = () => {
    dispatch(addProduct({
      id: data._id,
      picture: data.picture,
      price: data.price,
      quantity: data.quantity,
      marque: data.marque
    }))
  }
  return (<>
    <Navbar />
    <div className="container-details" >
      <img src={data.picture} />
      <div>
        <h5>{data.marque} watch </h5>
        <h4>{data.title}<br />Gender :{data.gender}<br />Style : Moderne</h4>
        <div id="add-to-cart">
          <h6>{data.price} $ </h6>
          <button onClick={addProductToCart}>Add to cart </button>
        </div>
      </div>
    </div>
  </>
  );
}

export default PageProductDetails;
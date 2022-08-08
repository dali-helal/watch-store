import {useState} from "react"
import {Slider} from "@mui/material"
import {useDispatch } from "react-redux"
import{addPropFilter} from "../redux/actions/FilterProduct"
import {FaCaretDown } from "react-icons/fa"
import "../styles/filterMobile.css"
const FilterMobile = () => {
   const [val,setVal]=useState([0,1200])
    const dispatch=useDispatch()
    const [filter,setFilter]=useState({
      FilterColor:[],
      FilterGender :[],
      FilterPrice :[],
      FilterMark :[]
    })
    const updateValFilter=(newVal)=>{
          setVal(newVal)
          setFilter({...filter,FilterPrice :[val[0],val[1]]})
    }
    
    const handleFilter=(e)=>{
      const name=e.target.name
      const value=e.target.value
      switch(name){
         case  "color":
            if(e.target.checked){
               const  arr=filter.FilterColor
               arr.push(value)
               setFilter({...filter,FilterColor :arr})
            }
            else {
               let arr=filter.FilterColor
               arr=arr.filter((prop) =>prop!==value)
               setFilter({...filter,FilterColor :arr})
            }
         break ;
         case  "Gender":
            if(e.target.checked){
               const  arr=filter.FilterGender
               arr.push(value)
               setFilter({...filter,FilterGender :arr})
            }
            else {
               let arr=filter.FilterGender
               arr=arr.filter((prop) =>prop!==value)
               setFilter({...filter,FilterGender :arr})
            }
         break ;
         case  "Mark":
            if(e.target.checked){
               const  arr=filter.FilterMark
               arr.push(value)
               setFilter({...filter,FilterMark :arr})
            }
            else {
               let arr=filter.FilterMark
               arr=arr.filter((prop) =>prop!==value)
               setFilter({...filter,FilterMark :arr})
            }
         break ;
         
      }
    }
    const handleDisplayPrice=()=>{
      const price=document.querySelector('.container-price-mobile')
      price.classList.toggle('activePrice')
  }
  const handleDisplayGender=()=>{
      const gender=document.querySelector('.mobile-container-gender')
      gender.classList.toggle('activeGender')
  }
  const handleDisplayMark=()=>{
      const Mark=document.querySelector('.mobile-container-Mark')
      Mark.classList.toggle('activeMark')
  }
  const handleDisplayColor=()=>{
      const color=document.querySelector('.mobile-container-color')
      color.classList.toggle('activeColor')
  }
    dispatch(addPropFilter(filter))
    return (  
    
      <div className="mobile-filter" >
      <div className="subnavbtn"><p>Price</p>
      <FaCaretDown className="icon-sub-nav" onClick={handleDisplayPrice} size={"24"}/>
      </div>
      <div className="container-price-mobile">
                 <div className="slider-price-mobile">
                 <Slider 
                   valueLabelDisplay="auto"  style={{width : 100}}
                    value={val}
                   max={1200}
                   step={20}
                   />
                 </div>
                
      </div>    
          <hr />
      <div className="subnavbtn">
              <p>Gender</p>
              <FaCaretDown className="icon-sub-nav" onClick={handleDisplayGender}size={"24"}/>
      </div>
          <div className="mobile-container-gender" >
              <label>
                  <input type="checkbox"
                      name="Gender"
                      value="men"
                      onChange={handleFilter}
                  />
                  Men
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Gender"
                      value="women"
                      onChange={handleFilter}
                  />
                  Women
              </label>
          </div>

     
          <hr />
          <div className="subnavbtn">
              <p>Mark</p>
              <FaCaretDown className="icon-sub-nav" onClick={handleDisplayMark}size={"24"}/>
          </div>
          <div className="mobile-container-Mark">
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Swatch"
                      onChange={handleFilter}
                  />
                  Swatch
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Festina"
                      onChange={handleFilter}
                  />
                  Festina
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Toms"
                      onChange={handleFilter}
                  />
                  Toms
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Q&Q"
                      onChange={handleFilter}
                  />
                  Q&Q
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Tissot"
                      onChange={handleFilter}
                  />
                  Tissot
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Rinnady"
                      onChange={handleFilter}
                  />
                  Rinnady
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Ferro"
                      onChange={handleFilter}
                  />
                  Ferro
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Migeer"
                      onChange={handleFilter}
                  />
                  Migeer
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="Mark"
                      value="Ck"
                      onChange={handleFilter}
                  />
                  Ck
              </label>
          </div>
          <hr />
          <div className="subnavbtn">
              <p>Color</p>
              <FaCaretDown className="icon-sub-nav" onClick={handleDisplayColor}size={"24"}/>
          </div>
          <div className="mobile-container-color">
              <label>
                  <input
                      type="checkbox"
                      name="color"
                      value="Black"
                      onChange={handleFilter}
                  />
                  Black
              </label>

              <label>
                  <input
                      type="checkbox"
                      name="color"
                      value="Gold"
                      onChange={handleFilter}
                  />
                  Gold
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="color"
                      value="Silver"
                      onChange={handleFilter}
                  />
                  Silver
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="color"
                      value="Brown"
                      onChange={handleFilter}
                  />
                  Brown
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="color"
                      value="Blue"
                      onChange={handleFilter}
                  />
                  Blue
              </label>
              <label>
                  <input
                      type="checkbox"
                      name="color"
                      value="Blanc"
                      onChange={handleFilter}
                  />
                  Blanc
              </label>
      </div>
  </div>
    );
}
 
export default FilterMobile;
import {useState} from "react"
import {Slider} from "@mui/material"
import { useDispatch } from "react-redux"
import{addPropFilter} from "../redux/actions/FilterProduct"
import "../styles/filterProducts.css"
const FilterProducts = () => {
    const [val,setVal]=useState([0,1200])
    const dispatch=useDispatch()
    const [filter,setFilter]=useState({
      FilterColor:[],
      FilterGender :[],
      FilterPrice :[],
      FilterMark :[]
    })
    const updateVal=(e,newVal)=>{
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
    dispatch(addPropFilter(filter))
    return (  
        <div className="filter-container">
            <h6> Filter by</h6>
            <div>
               <div>
               <p>Price</p>
               <div className="slider-price" >
                   <Slider 
                   valueLabelDisplay="auto"  style={{width : 200}}
                    onChange={updateVal}
                    value={val}
                   max={1200}
                   step={20}
                   />
               </div>   
                <div className="slider-value">
                <div className="minPrice">{val[0]}</div>
                <div className="maxPrice">{val[1]}</div>
                </div>
               </div>
            <hr/>
             <p>Gender</p>
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
             <hr/>
              <p>Mark</p>
              <div className="container-Mark">
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
             <hr/>
             <p>Color</p>
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
 
export default FilterProducts;
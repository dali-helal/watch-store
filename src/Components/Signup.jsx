import { useState } from "react";
import {FaPhoneAlt,FaUserAlt, FaLock,FaUserEdit } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"
import "../styles/signup.css"
const Signup = () => {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading}=useSignup()
    const handleSubmit= async (e)=>{
          e.preventDefault()  
          await signup(email,password,name,phone)
    }
    return ( 
        <div className="body">
            <div className="container-signup" >
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="name-signup">
                <FaUserEdit className="icon-signup"  size={"20px"}/>
               <input
               type="text" 
               placeholder="enter name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
               />
              </div>
              <div className="phone-signup">
               <FaPhoneAlt className="icon-signup" size={"20px"} />
              <input
               type="text" 
               placeholder="enter phone"
               value={phone}
               onChange={(e)=>setPhone(e.target.value)}
               />
              </div>
              <div className="email-signup">
                <FaUserAlt  className="icon-signup" size={"20px"}/>
              <input
               type="email" 
               placeholder="enter email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
              </div>
              {error && <h6> {error.email} </h6>}
              <div className="password-signup" >
                <FaLock className="icon-signup" size={"20px"}/>
              <input
               type="password" 
               placeholder="enter password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
              </div>
              {error && <h6> {error.password} </h6>}
              <button className="signup-btn">Sign up</button>
            </form>
            <div className="signin">
                 <div>
                 <h5>already have an account ?</h5>
                 <Link to={"/Login"}>
                <h4> Sign in </h4>
                </Link>
                 </div>
            
            </div>
            </div>
        </div>
     );
}
 
export default Signup;
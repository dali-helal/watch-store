import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"
import "../styles/login.css"
const Signin = () => {
  const [email, SetEmail ] = useState('')
  const [password, SetPassword ] = useState('')
  const  {login,error}=useLogin()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    await login(email,password)
   }
    return (
    <div className="body">
      <div className="container-login">
        <form className="login-form"  onSubmit={handleSubmit}>
          <div className="email">
            <FaUser className="icon-login"  size={"20"}/>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e)=> SetEmail(e.target.value)}
            />
          </div>
          {error && <h6> {error.email} </h6>}
          <div className="password">
            <FaLock className="icon-login" size={"20"} />
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          {error && <h6> {error.password} </h6>}
          <h4>Forget password ?</h4>
          <button className="login-btn">Login</button>
        </form>

        <div className="sign-up">
          <div>
          <h4>don't have an account ?</h4>
          <Link to={"/signup"}>
            <h5> Sign up!</h5>
          </Link>
          </div>
        </div>

        <div className="login-with">
          <div id="login-with">
            <hr />
            <h6>or sign in with</h6>
            <hr />
          </div>
        </div>     
          <div className="login-icons" >
            <div className="icon-facebook">
            <FaFacebookF className="icons-Facebook" size={"35"} />
            </div>
        
            <div className="icon-gmail">
            <FaGoogle className="icons-ge"  size={"35"}/>
            </div>
            <div className="icon-twitter">
            <FaTwitter className="icons-twitter"  size={"35"}/>
            </div>
            
          </div>
        
      </div>
    </div>
  );
}

export default Signin;
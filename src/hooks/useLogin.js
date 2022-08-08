import { useState } from "react";
export const useLogin=()=>{
        const [error,setError]=useState(null)
        const login= async (email,password)=>{
      
            const response=await  fetch('https://watch-store-react-js.herokuapp.com/api/auth/login',{
                method : "POST",
                headers :{"Content-Type"  :"application/json"},
                body : JSON.stringify({email,password})
            })
            const json =await response.json()

            if(!response.ok){
                setError(json.errors)
            }
            if(response.ok){
                localStorage.setItem('user',JSON.stringify(json))
            }
        }
        return {login,error}
}
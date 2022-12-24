import { useState } from "react";
import {url} from "../api.js"
export const useSignup=()=>{
   
     const [error,setError]=useState(null)
     const [isloading,setIsloading]=useState(null)
     const signup=async(email,password,name,phone)=>{
        setIsloading(true)
        setError(null)

        const response=await fetch(`${url}/api/auth/signup`,{
            method : "POST",
            headers :{ "Content-Type" : 'application/json'},
            body :JSON.stringify({email,password,name,phone})
        })
        const json=await response.json()
        if(!response.ok){
            setIsloading(false)
            setError(json.errors)
        }
        if (response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            setIsloading(false)
            window.location.href = "/";
        }
     }
    return {signup,isloading,error}
}
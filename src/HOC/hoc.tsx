import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Hoc = (Component:any)=>{
    const Auth = (props:any)=>{
        const navigate = useNavigate()
        useEffect(() => {
            if(!localStorage.getItem("token")){
                console.log(localStorage.getItem("token"))
                return navigate("/login")
            }
          }, [navigate]);
        return <Component {...props}/>
    }
    return Auth
}
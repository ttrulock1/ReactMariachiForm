import { useEffect } from "react";

export default function Logout({logout}){
    useEffect(()=> {
        logout()
    },[])
    return null
}
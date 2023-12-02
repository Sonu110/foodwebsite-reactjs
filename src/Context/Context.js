import { useState } from "react";
import { createContext } from "react";


const Mycontext =createContext()

const MyProvider = ({ children }) => {

    const [cart , setcart]= useState([])
    console.log(cart);


    return(
        <Mycontext.Provider value={{cart, setcart}}>   {children}</Mycontext.Provider>
    )





}



export {Mycontext,MyProvider}
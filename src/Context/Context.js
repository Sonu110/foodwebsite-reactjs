import { useState } from "react";
import { createContext } from "react";


const Mycontext =createContext()

const MyProvider = ({ children }) => {

    const [cart , setcart]= useState([])
    
    const remove = (productId) => {
        // Filter out the item with the specified productId
        const updatedCart = cart.filter((item) => item.id !== productId);
        setcart(updatedCart);
      }



    return(
        <Mycontext.Provider value={{cart, setcart,remove }}>   {children}</Mycontext.Provider>
    )





}



export {Mycontext,MyProvider}
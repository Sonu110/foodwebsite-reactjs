import { useState } from "react";
import { createContext } from "react";


const Mycontext =createContext()

const MyProvider = ({ children }) => {

    const [name , setname]= useState('')
    const [pasword, setpassword]= useState('')

    


    const [cart , setcart]= useState([])
    
    const remove = (productId) => {
        // Filter out the item with the specified productId
        const updatedCart = cart.filter((item) => item.id !== productId);
        setcart(updatedCart);
      }



    return(
        <Mycontext.Provider value={{cart, setcart,remove,name,setname,pasword,setpassword }}>   {children}</Mycontext.Provider>
    )





}



export {Mycontext,MyProvider}
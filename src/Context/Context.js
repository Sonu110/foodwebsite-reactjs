import { useEffect, useState } from "react";
import { createContext } from "react";


const Mycontext =createContext()

const MyProvider = ({ children }) => {

    const [name , setname]= useState('')
    const [pasword, setpassword]= useState('')
    const [auth, setauth] = useState(false)

   

    if(name==="sonu"&& pasword ===12345)
    {
        setauth(true)
    }


    const [cart , setcart]= useState([])
    
    const remove = (productId) => {
        // Filter out the item with the specified productId
        const updatedCart = cart.filter((item) => item.id !== productId);
        setcart(updatedCart);
      }



    return(
        <Mycontext.Provider value={{cart, setcart,remove,name,setname,pasword,setpassword ,auth}}>   {children}</Mycontext.Provider>
    )





}



export {Mycontext,MyProvider}
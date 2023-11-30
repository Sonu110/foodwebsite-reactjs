import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import  {Menu }from '../../utils/Products'

function Details() {
  const { name, id } = useParams();
  const [productdata, setproductdata] = useState(Menu);
  
  console.log(name);
  // Check if the selected category (name) exists in productdata
  if (productdata.hasOwnProperty(name)) {
    // Find the product with the specified id in the selected category
    const data = productdata[name].find((product) => product.id === Number(id));
  
    if (data) {
      console.log(data);
      // Handle the case where the product is found
    } else {
      console.log("Product not found");
      // Handle the case where the product with the specified id is not found in the selected category
    }
  } else {
    console.log("Category not found");
    // Handle the case where the selected category (name) is not found in productdata
  }
    
  
  
  
 return (
  <>
  
  <h1>hjkhj</h1>
  
  </>
  )
}

export default Details
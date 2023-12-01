import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import  {Menu }from '../../utils/Products'
import RowContainer from '../../components/RowContainer';

function Details() {

  const { name, id } = useParams();
  const [productdata, setproductdata] = useState(Menu);
  const [rest , setrest] = useState()
  console.log(name);
  // Check if the selected category (name) exists in productdata
 
    const data = productdata[name].find((product) => product.id === Number(id));

  
  
    if (data) {
      console.log(data);
      // Handle the case where the product is found
    } else {
      console.log("Product not found");
      // Handle the case where the product with the specified id is not found in the selected category
    }
  




  return (
    <>
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={data?.imageSrc}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">{name}</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{data?.name}</h1>
            
            <p className="leading-relaxed">
              {data?.description}
            </p>
          
            <div className="flex items-center justify-between mt-8">
              <span className="title-font text-xl font-bold text-gray-900">₹{data?.price}</span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ml-4">
        Our fresh & healthy Products related
      </p>


    <RowContainer data={productdata.icecreams}
      flag={true}
      

></RowContainer>
    
    
    </>
    
  )
}

export default Details
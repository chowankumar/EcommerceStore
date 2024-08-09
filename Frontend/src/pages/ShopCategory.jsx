import React, { useContext } from 'react'
import dropdown_icon from "./../Components/assets/dropdown_icon.png"
import Item from "./../Components/Item"
import {ShopContext} from "./../context/ShopContext"

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='flex flex-col items-center'>
      <div className=''>
        <img src={props.banner} alt="" className='block w-[80%] mx-auto' />
      </div>


      <div className='flex w-[80%] justify-between py-6'>
        <p><span className='font-[500]'>showing 1-12 </span>out of 36 Products </p>
        <button className='flex items-center gap-2 border px-4 py-2 rounded-full'>Sort by <img src={dropdown_icon} alt="" /></button>
      </div>

      <div className='gridCollection w-[1200px]'>
        {
          all_product.map((item, index) => {

            if (props.category === item.category) {
              return <Item index={index} id={item.id} name={item.name} img={item.image} nprice={item.new_price} oprice={item.old_price} />
            } else {
              return null

            }
                 
           })
        }
    </div>

     <div  className='py-12'>
         <button className='border bg-gray-200 text-gray-600 rounded-full px-8 py-3'> Explore  More</button>
     </div>
    </div >


  )
}

export default ShopCategory
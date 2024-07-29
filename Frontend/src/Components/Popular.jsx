import React from 'react'
import data_product from './assets/data'
import Item from './Item'


const Popular = () => {
  return (
    <div className='h-[90vh]  flex flex-col items-center gap-8 '>

     <div>
     <h1 className='text-[45px] font-[500] '>POPULAR IN WOMEN</h1>
     <hr className='w-[30%] border-[3px] border-black rounded-[10px] mx-auto' />
     </div>

        <div className='flex gap-6 w-[1200px]'>
        {
           data_product.map((item,index)=>{
                 return (
                    <Item  index={index} id={item.id} name={item.name} img={item.image} nprice={item.new_price} oprice={item.old_price} />
                 )
           })
        }
        </div>
    </div>
  )
}

export default Popular
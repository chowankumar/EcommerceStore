import React from 'react'
import Item from "./Item"
import new_collection from "../Components/assets/new_collections"

const NewCollection = () => {
  return (
    <div className='mb-[100px] flex flex-col items-center gap-8 '>

     <div>
     <h1 className='text-[45px] font-[500] '>NEW COLLECTION</h1>
     <hr className='w-[30%] border-[3px] border-black rounded-[10px] mx-auto' />
     </div>

        <div className='gridCollection w-[1200px]'>
        {
           new_collection.map((item,index)=>{
                 return (
                    <Item  index={index} id={item.id} name={item.name} img={item.image} nprice={item.new_price} oprice={item.old_price} />
                 )
           })
        }
        </div>
    </div>
  )
}

export default NewCollection
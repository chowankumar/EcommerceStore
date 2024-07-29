import React from 'react'
import exclusive_image from "./assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='h-[80vh]'>
        <div className='h-[70vh] w-[80%] bgOffer mx-auto flex'>
        <div className='flex flex-col gap-2 items-start justify-center w-[60%] ml-32'>
            <p className='font-[500] text-[60px]'>
                <h1>Exclusive</h1>
                <h2>Offers For You</h2>
            </p>
            <p className='font-[500] text-[17px]'>
                ONLY ON BEST SELLER PRODUCTS
            </p>
            <button className='border flex items-center gap-2 px-16 py-4 mt-4 text-white bg-[#ff4141] rounded-full font-[500] w-fit'>Check Now</button>
        </div>
        <div>
            <img src={exclusive_image} alt=""  className='w-[300px]'/>
        </div>
    
    </div>
    </div>
  )
}

export default Offers
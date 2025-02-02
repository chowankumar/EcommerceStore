import React from 'react'
import {assets} from "../assets/assets"
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            
         <div>
         <img src={assets.logo} alt="" className='w-[200px]' />
            <p className='w-full md:w-2/3 text-gray-600'>
            Your one-stop shop for everything you love. Discover, shop, and enjoy—because you deserve the best!</p>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+92 34994357773</li>
              <li>chowanmalhani5@gmail.com</li>
            </ul>
         </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - ALL Right   Reserved</p>
        </div>
    </div>
  )
}

export default Footer
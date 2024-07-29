import React, { useState } from 'react'
import logo from "../Components/assets/logo.png"
import cart from "../Components/assets/cart_icon.png"

const Navbar = () => {

  const [active,setActive] = useState("home")
  return (
    <>
    <div className='flex justify-between w-[80%] mx-auto p-8 items-center'>
      <div className='flex items-center gap-1'>
        <img src={logo} alt=""  className='w-[50px]'/>
        <p className='text-[30px] font-[500]'>SHOPPER</p>
      </div>
      <div>
        <ul className='hidden lg:flex gap-8 font-[500] items-center'>
          <li onClick={()=> setActive("home")} className={`${active==="home"?"active_navitem":""} cursor-pointer`}>Shop</li>
          <li onClick={()=> setActive("men")} className={`${active==="men"?"active_navitem":""} cursor-pointer`}>Men</li>
          <li onClick={()=> setActive("women")} className={`${active==="women"?"active_navitem":""} cursor-pointer`}>Women</li>
          <li onClick={()=> setActive("kids")} className={`${active==="kids"?"active_navitem":""} cursor-pointer`}>Kids</li>
        </ul>
      </div>

      <div className='flex gap-8 items-center relative'>
        <button className='border border-[#7a7a7a] px-10 py-2 rounded-full hover:bg-[#f8eaea74]'>Log in</button>
        <img src={cart} alt="" className='w-[35px]' />
        <div className='flex justify-center text-[14px] items-center text-white bg-[#ff4141] h-[22px] w-[22px] rounded-full mt-[-43px] ml-[-40px]'>0</div>
      </div>
     
    </div>
    <hr />
    
    </>
  )
}

export default Navbar
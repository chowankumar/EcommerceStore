import React from 'react'
import arrow_icon from "./assets/breadcrum_arrow.png"

const Breadcrum = (props) => {

    const{product} = props;
  return (
    <div className='breadcrum flex items-center gap-2 text-[#5e5e5e] font-[600] text-[15px] py-[20px] px-[130px]'>
        HOME<img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.name} <img src="" alt="" />
    </div>
  )
}

export default Breadcrum
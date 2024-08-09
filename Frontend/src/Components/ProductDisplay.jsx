import React from 'react'
import star_icon from "./assets/star_icon.png"
import star_dull_icon from "./assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='productdisplay flex my-0 mx-[130px]'>

        <div className='left flex gap-[17px] w-[50%]'>
            <div className="imagelistt flex flex-col gap-[16px]">
                <img src={product.image} alt="" className='h-[125px] w-[170px] '/>
                <img src={product.image} alt="" className='h-[125px] w-[170px]' />
                <img src={product.image} alt="" className='h-[125px] w-[170px]'/>
                <img src={product.image} alt="" className='h-[125px] w-[170px]'/>
            </div>
            <div className="productdisplay-img ">
                <img className='main-img w-[700px] h-[550px]' src={product.image} alt=""  />
            </div>
        </div>

        <div className="right my-0 mx-[70px] flex flex-col w-[50%]">
            <h1 className='text-[#5e5e5e] text-[32px] font-[700]'>{product.name}</h1>


           <div className="right-star flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
           <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
           </div>

           <div className="right-prices flex my-[20px] px-0 gap-[30px] text-[24px] font-[700]">
            <div className="oldprice text-[#818181] line-through">${product.old_price}</div>
            <div className="newprice text-[#ff4141]">${product.new_price}</div>
           </div>

           <div className='right-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem expedita maxime similique numquam aliquid asperiores ducimus voluptatum dolore dolores?

           </div>

           <div className="rightsize">
            <h1 className='mt-[25px] text-[#656565] text-[20px] font-[600]'>Select Size</h1>
               <div className='right-sizes flex my-[15px] gap-[20px]'>
                <div className='py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                <div className='py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                <div className='py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                <div className='py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                <div className='py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
               </div>
           </div>
           <button className='px-5 py-4 w-[200px] text-[16px] font-[600] text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer'>ADD TO CART</button>
           <p className='right-category font-[700]'>Catgergory : <span className='font-[400]'>Women , T-shirt , Crop Top</span></p>
           <p className='right-category font-[700]'>Tags : <span className='font-[400]'>Modern , Latest</span></p>

        </div>


    </div>
  )
}

export default ProductDisplay
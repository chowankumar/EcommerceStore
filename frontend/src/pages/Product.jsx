import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { ShopContext } from "./../context/ShopContext"
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setPorductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setPorductData(item)
        setImage(item.image[0])
        return null;
      }

    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])



  return productData ? (
    <div className='bordr-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>


        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-[35%] '>
            {
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  className='sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  onClick={() => setImage(item)}
                />

              ))
            }

          </div>
          <div className='w-full s:w-[80%]'>
            <img src={image} alt="" />

          </div>

        </div>

        {/* ------product info-------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>

            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_icon} className='w-3' />
            <img src={assets.star_dull_icon} className='w-3' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button
                    className={`border py-2 px-4  bg-gray-100
                  ${size === item ? 'border-orange-500' : ""}`}
                    key={index}
                    onClick={() => setSize(item)}>{item}</button>
                ))
              }

            </div>
          </div>

          <button className=' bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Orignal product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>

          </div>
        </div>
      </div>

      {/* description and reviews */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus asperiores dignissimos doloremque id reprehenderit facere similique officiis commodi obcaecati!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eum ut temporibus consequatur quia rem nemo, accusamus quas. Exercitationem, amet.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus asperiores dignissimos doloremque id reprehenderit facere similique officiis commodi obcaecati!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eum ut temporibus consequatur quia rem nemo, accusamus quas. Exercitationem, amet.</p>
        </div>
      </div>

      {/* display related products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
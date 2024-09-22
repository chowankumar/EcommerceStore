import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from "react-router-dom"

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Safely access the first image if it exists
  const firstImage = image && image.length > 0 ? image[0] : 'fallback-image-url'; // You can replace 'fallback-image-url' with a default image URL

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          src={firstImage}
          alt={name}
          className='hover:scale-110 transition ease-in-out'
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;

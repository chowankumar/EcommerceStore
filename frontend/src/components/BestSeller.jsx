import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "./../context/ShopContext";
import Title from "./Title"
import ProductItem from './ProductItem';


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([products]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))

    },[products])

    return (
        <div className='my-10'>
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our bestsellers, loved by customers for their exceptional quality and timeless appeal. These top-rated items combine style, comfort, and value, making them must-haves for any wardrobe.</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
                {


                    bestSeller.map((item, index) => (<ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />


                    ))
                }


            </div>
        </div>
    )
}

export default BestSeller
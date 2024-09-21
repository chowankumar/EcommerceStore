import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col w-ful items-start gap-3'>
      <div className='flex gap-2'>
        <p className='mb-2'>Upload Image</p>

        <label htmlFor="image1">
          <img
            className='w-20'
            src={assets.upload_area} />
          <input type="file" id='image1' hidden />

        </label>

        <label htmlFor="image2">
          <img
            className='w-20'
            src={assets.upload_area} />
          <input type="file" id='image1' hidden />

        </label>

        <label htmlFor="image3">
          <img
            className='w-20'
            src={assets.upload_area} />
          <input type="file" id='image1' hidden />

        </label>

        <label htmlFor="image4">
          <img
            className='w-20'
            src={assets.upload_area} />
          <input type="file" id='image1' hidden />

        </label>

      </div>

      <div className='w-full'>

        <p className='mb-2'>Product name</p>
        <input
          type="text"
          placeholder='Type here'
          required
          className='w-full max-w-[500px] px-3 py-2' />
      </div>

      <div className='w-full'>

        <p className='mb-2'>Product Description</p>
        <textarea
          type="text"
          placeholder='write description'
          required
          className='w-full max-w-[500px] px-3 py-2' />

      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Men</option>
            <option value="Kids">Men</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product SubCategory</p>
          <select className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25'/>
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>

         <div className='flex gap-3'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>

          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>

          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
          </div>

          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>

          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
          </div>

         </div>
      </div>


      <div className='flex gap-2 mt-2'>
        <input type="checkbox" id='bestseller' />
        <label htmlFor="bestSeller">Add to bstseller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
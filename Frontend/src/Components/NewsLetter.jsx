import React from 'react'

const NewsLetter = () => {
  return (
   <div className='mb-[150px]'>
     <div className='w-[80%] bgOffer h-[40vh]  mx-auto flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-[50px] font-[500]'>Get Exclusive offer on your Email</h1>
        <p className='text-[15px] font-[500]'>Subscribe our newsletter and stay updated</p>
        <div className='relative'>
            <input type="email" placeholder='your email id' className='border w-[400px] px-5 py-3 rounded-full' />
            <button className='bg-black text-white py-3 rounded-full px-10 absolute ml-[-60px]'>Subscribe</button>
        </div>
        

</div>
   </div>
  )
}

export default NewsLetter
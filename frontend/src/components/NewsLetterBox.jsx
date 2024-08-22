import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler =(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium tect-gray-800'>Subscribe noe and get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, consequatur!</p>
        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3'>
            <input 
            type="email"
            placeholder='Enter your email' 
            className='w-full sm:flex-1 outline-none'
            required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>

  )
}

export default NewsLetterBox
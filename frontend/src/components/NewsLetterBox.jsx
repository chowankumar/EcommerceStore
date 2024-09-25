import React from 'react'
import Title from './../components/Title'

const NewsLetterBox = () => {
    const onSubmitHandler =(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <Title text1={"GET IN TOUCH"}/>
        
        <form onSubmit={onSubmitHandler} action="" className=' flex flex-col items-center gap-2 border shadow-xl py-10 rounded-xl'>    
            <input 
            type="email"
            placeholder='Enter your email' 
            className='sm:flex-1 outline-none border border-gray-400
            w-[50%] py-2 pl-2
             placeholder:text-gray-600  rounded-sm'
            required/>
          

            <textarea name="message" rows='8' placeholder='Enter your message here' className='sm:flex-1 outline-none border border-gray-400 rounded-sm
            w-[50%] py-2 pl-2
             placeholder:text-gray-600 '></textarea>

            <button type='submit clas
            contact-Submit' className='multiColor text-white text-xs px-10 py-4 font-bold rounded-full'>Submit now</button>
        </form>
    </div>

  )
}

export default NewsLetterBox
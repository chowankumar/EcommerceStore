import React from 'react'
import Title from "../components/Title"
import {assets} from '../assets/assets'
import NewsLetterBox from './../components/NewsLetterBox'
const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>

        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit mollitia sit omnis commodi! Beatae ex vero alias id autem perferendis corrupti cum vel consequuntur voluptas necessitatibus dignissimos modi, earum deleniti  </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit mollitia sit omnis commodi! Beatae ex vero alias id autem perferendis corrupti cum vel consequuntur voluptas necessitatibus dignissimos modi, earum deleniti  </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit mollitia sit omnis commodi!   </p>


          </div>

        </div>
       

        <div  className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance : </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis cupiditate reiciendis minus fuga ratione?</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance : </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis cupiditate reiciendis minus fuga ratione?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance : </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis cupiditate reiciendis minus fuga ratione?</p>
          </div>
        </div>

        <NewsLetterBox/>
    </div>
  )
}

export default About
import React from 'react'
import Title from "../components/Title"
import { assets } from '../assets/assets'
import NewsLetterBox from './../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            "Welcome to Chowan's Store, where we are passionate about bringing you the best products with an unmatched shopping experience. Our journey began with the vision to create a one-stop shop that offers high-quality, affordable, and diverse products that meet your everyday needs. From fashion to electronics, home essentials to unique gifts, we have carefully curated our collections to ensure you find something you love.

            At Chowan's Store, we believe in providing more than just products; we strive to offer an experience that is convenient, customer-friendly, and reliable. We prioritize customer satisfaction above all else and are always looking for new ways to enhance your shopping journey with us."
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Chowan’s Store is to create a seamless and enjoyable shopping experience by offering high-quality products at competitive prices. We aim to make online shopping easy, accessible, and trustworthy for everyone, while continually improving our services based on customer feedback. </p>


        </div>

      </div>


      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'US'} />
      </div>

      <div className='flex flex-col gap-4 md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col shadow-xl rounded-lg'>
          <b>Our Quality : </b>
          <p>At Chowan's Store, quality is at the heart of everything we do. We are committed to offering products that meet the highest standards of craftsmanship and durability, ensuring that our customers receive nothing but the best. Every item in our store is carefully selected and rigorously tested to guarantee excellence in design, material, and performance.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  shadow-xl rounded-lg'>
          <b>Our Quantity : </b>
          <p>At Chowan's Store, we offer a vast selection of products to cater to all your needs. Our diverse range ensures that you’ll always find what you’re looking for, whether it’s the latest trends or everyday essentials. With a constantly growing inventory, we are dedicated to providing you with plenty of options, making your shopping experience seamless and satisfying.</p>
        </div>
        <div className='border px-8 md:px-10 py-4 sm:py-20 flex flex-col gap-5  shadow-xl rounded-lg'>
          <b>Our Network : </b>
          <p>Chowan's Store operates an extensive online network, with three physical locations in Karachi, Hyderabad, and Mithi. This allows us to serve a broader customer base while ensuring fast and reliable delivery. Whether you shop online or visit one of our stores, we are dedicated to providing a consistent and high-quality shopping experience across all locations.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
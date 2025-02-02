import React from 'react'
import Hero from '../components/Hero'
import OurPolicy from "./../components/OurPolicy"
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import NewsLetterBox from '../components/NewsLetterBox'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
       {/* <Hero/>  */}
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
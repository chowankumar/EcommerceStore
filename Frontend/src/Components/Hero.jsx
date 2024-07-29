import React from 'react'
import hero_image from "./assets/hero_image.png"
import hand_icon from "./assets/hand_icon.png"
import arrow_icon from "./assets/arrow.png"

const Hero = () => {
    return (
        <div className='h-[100vh] flex bgHero w-[100%] items-center'>
            <div className='w-[50%] ml-32 flex flex-col gap-4'>
                <p className='font-[650] text-[20px]'>NEW ARRIVAL ONLY</p>
                <div className='font-[500] text-[80px] w-[65%] leading-[80px]'>
                    <p className='flex items-center'>new   <img src={hand_icon} alt="" className='w-[75px]' />  </p>
                    <p> collection for  everyone</p>

                </div>

                <button className='border flex items-center gap-2 px-10 py-4 mt-4 text-white bg-[#ff4141] rounded-full font-[500] w-fit'>Latest Collection <img src={arrow_icon} alt="" className='w-[20px]' /></button>

            </div>
            <div>
                <img src={hero_image} alt="" className='w-[445px]' />
            </div>
        </div>
    )
}

export default Hero
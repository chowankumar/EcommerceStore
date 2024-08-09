import React from 'react'

const LoginSignup = () => {
  return (

    <div className='loginsignup w-[100%]  h-[89vh] bg-[#fce3fe] pt-[100px]'>


      <div className='loginsignup-container w-[580px] h-[500px] bg-white m-auto px-[20px] py-[20px] rounded-sm'>
        <h1 className='my-[20px] mx-0'>Sign Up</h1>

        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">

          <input
            type="text"
            placeholder='yourname'
            className='h-[52px] w-[100%] pl-[20px] border border-[#c9c9c9] text-[#5c5c5c] text-[18px]'
          />

          <input
            type="email"
            placeholder='Email Address'
            className='h-[52px] w-[100%] pl-[20px] border border-[#c9c9c9] text-[#5c5c5c] text-[18px]' />

          <input type="password" placeholder='password'
            className='h-[52px] w-[100%] pl-[20px] border border-[#c9c9c9] text-[#5c5c5c] text-[18px]' />
        </div>

        <button className='w-[100%] h-[52px] text-white bg-[#ff4141] mt-[30px] border-none text-[20px] font-[500] cursor-pointer' >Continue</button >

        <p className="loginsingnup-login mt-[20px] text-[#5c5c5c] text-[15px] font-[500]">
          Already have an account? <span className='text-[#ff4141] font-[600]'>Login</span>
        </p>
        <div className="loginsignup-agree flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[15px] font-[500]">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use and </p>

        </div>
      </div>

    </div>
  )
}

export default LoginSignup
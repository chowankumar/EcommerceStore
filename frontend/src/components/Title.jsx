import React from 'react';
import {assets} from './../assets/assets'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-4 items-center mb-[10px]'>
      <p className='about-title  flex gap-4 items-center'>
          <div className='bg-black border border-1 rounded h-16 w-2'></div> 
          <h1 className='font-[600] text-[50px]'> {text1}{''} {text2} </h1>  
          {/* <img className='absolute right-0 top-0 z-[-1] w-[250px]' src={assets.pattern} alt="" /> */}
      </p>

     
    </div>
  );
};

export default Title;

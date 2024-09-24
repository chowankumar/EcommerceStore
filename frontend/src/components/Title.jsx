import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-4 items-center mb-3'>
      <p className='text-gray-500 text-[35px]'> 
        {text1}{' '}
        <span className='text-gray-800 font-semibold text-[30px]'>  
          {text2}
        </span>
      </p>

      <div className='relative w-16 sm:w-24 h-[2px] bg-gradient-to-r from-gray-400 to-gray-800 animate-slide'>
        <div className='absolute inset-0 w-8 h-full bg-gradient-to-r from-indigo-500 to-indigo-800'></div>
      </div>
    </div>
  );
};

export default Title;

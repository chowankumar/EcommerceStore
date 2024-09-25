import React from 'react';
import Title from './../components/Title';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetterBox = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

     
    const toastId = toast.loading("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "b4f0bc4d-dcc2-49da-8bad-73f020df2f27");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        
        toast.update(toastId, {
          render: "Form Submitted Successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        event.target.reset();
      } else {
        
        toast.update(toastId, {
          render: data.message || "Form submission failed",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
       
      toast.update(toastId, {
        render: "Network error, please try again later",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='text-center'>
      <Title text1={"GET IN TOUCH"} />
      
      <form onSubmit={onSubmit} className='flex flex-col items-center gap-2 border shadow-xl py-10 rounded-xl'>
        <input 
          type="email"
          placeholder='Enter your email'
          className='sm:flex-1 outline-none border border-gray-400 w-[50%] py-2 pl-2 placeholder:text-gray-600 rounded-sm'
          required
        />
        
        <textarea
          name="message"
          rows='8'
          placeholder='Enter your message here'
          className='sm:flex-1 outline-none border border-gray-400 rounded-sm w-[50%] py-2 pl-2 placeholder:text-gray-600'
        ></textarea>

        <button type='submit' className='multiColor text-white text-xs px-10 py-4 font-bold rounded-full'>
          Submit now
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;

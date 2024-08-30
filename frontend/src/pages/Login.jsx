import React, { useState } from 'react'
import axios from "axios";

const Login = () => {
  const [currentState,setCurrentState] = useState('Login');
     const url = "http://localhost:4000"

  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))

  }
 
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState == "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      //hidden the login page
      setShowLogin(false);

    } else {
      alert(response.data.message)
    }
  }


  
  
  return (
    <form onSubmit={onLogin} className='flex flex-col  items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

    {
      currentState === "Login"?"": 
      <input 
      type="text" 
      className='w-full px-3 py-2 border border-gray-800' 
      placeholder='Name' 
      required 
      value={data.name}
      onChange={onChangeHandler}
      name='name'/>
      
    }
      
      <input 
      type="email"
       className='w-full px-3 py-2 border border-gray-800' 
       placeholder='Email' 
       required
       value={data.email}
       onChange={onChangeHandler}
       name='email' />
      
      <input 
      type="password" 
      className='w-full px-3 py-2 border border-gray-800' 
      placeholder='Password' 
      required
      value={data.password}
      onChange={onChangeHandler} 
      name ='password'/>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'> Forget your password?</p>
        {
          currentState === 'Login'
          ?<p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          :<p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }

      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In':'Sign Up'}</button>

    </form>
  )
}

export default Login
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState('Login');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null); // New state for profile image

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign') {
        // Create FormData to send image and text data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profile', profileImage); // Add image to the form data

        // Send the form data to the backend
        const response = await axios.post(backendUrl + '/api/user/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Specify form-data type
          },
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
        setName('');
        setEmail('');
        setPassword('');
        setProfileImage(null); // Clear the image field
      } else {
        // Handle login
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          setEmail('');
          setPassword('');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? '' : (
        <>
          <input
            type='text'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
          />

          {/* Image upload field for registration */}
          <input
            type='file'
            className='w-full px-3 py-2 border border-gray-800'
            accept='image/*'
            onChange={(e) => setProfileImage(e.target.files[0])} // Capture the file
            name='profile'
          />
        </>
      )}

      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name='email'
      />

      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name='password'
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign')} className='cursor-pointer'>
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
            Login Here
          </p>
        )}
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign'}
      </button>
    </form>
  );
};

export default Login;

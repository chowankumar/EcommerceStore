import React, { useContext, useState } from 'react'
import Title from './../components/Title'
import CartTotal from './../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import { toast } from 'react-toastify';
 

const PlaceOrder = () => { 
  const [method, setMethod] = useState('cod');
  const { navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({...data,[name]:value}));
  }

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    try {
        let orderItems = [];

        for(const items in cartItems){
          for(const item in cartItems[items]){
            if(cartItems[items][item] >0){
              const itemInfo = structuredClone(products.find(product => product._id === items))
              if(itemInfo){
                itemInfo.size = item;
                itemInfo.quantity = cartItems[items][item];
                orderItems.push(itemInfo)
              }
            }
          }

        }
       let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
       }

       switch (method){
        case'cod':
          const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
          if(response.data.success){
            setCartItems({});
            navigate('/order')
          }
        break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl +'/api/order/stripe',orderData,{headers:{token}})
          if(responseStripe.data.success){
           const{session_url} = responseStripe.data;
           window.location.replace(session_url)
          }else{
            toast.error(response.data.message)
          }
          break;

        default:
          break;
       }
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* leftside */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFROMATIONE'} />
        </div>

        <div className='flex gap-3'>
          <input
            type="text"
            onChange={onChangeHandler}
            value={formData.firstName}
            name='firstName'
            placeholder='First Name'
            required
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

          <input
            type="text"
            onChange={onChangeHandler}
            value={formData.lastName}
            name='lastName'
            placeholder='Last Name'
            required
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>

        <input
          type="email"
          onChange={onChangeHandler}
          value={formData.email}
          name='email'
          placeholder='Email Address'
          required
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

        <input
          type="text"
          onChange={onChangeHandler}
          value={formData.street}
          name='street'
          placeholder='Street'
          required
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

        <div className='flex gap-3'>
          <input
            type="text"
            onChange={onChangeHandler}
            value={formData.city}
            name='city'
            placeholder='City'
            required
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

          <input
            type="text"
            onChange={onChangeHandler}
            value={formData.state}
            name='state'
            placeholder='State'
            required
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>

        <div className='flex gap-3'>
          <input
            type="number"
            onChange={onChangeHandler}
            value={formData.zipcode}
            name='zipcode'
            placeholder='ZipCode'
            required
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
 
          <input
            type="text"
            onChange={onChangeHandler}
            value={formData.country}
            name='country'
            placeholder='Country'
            required
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>

        <input
          type="number"
          onChange={onChangeHandler}
          value={formData.phone}
          name='phone'
          placeholder='Phone'
          required
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />


      </div>

      {/* right side */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />


          <div className="flex gap-3 flex-col lg:flex-row">


            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer" onClick={() => setMethod("stripe")}>

              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ""}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' />
            </div>

            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer" onClick={() => setMethod("razorpay")}>

              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? "bg-green-400" : ""}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' />
            </div>

            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer" onClick={() => setMethod("cod")}>

              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? "bg-green-400" : ""}`}></p>
              <p className='text-gray-500 tet-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>


          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>



        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url }) => {

  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Men",
    size: []
  });

  const [selectedSizes, setSelectedSizes] = useState([]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };



  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSelectedSizes((prevSizes) => {
      if (prevSizes.includes(value)) {
        // Remove the size if it's already selected
        return prevSizes.filter((size) => size !== value);
      } else {
        // Add the size to the array
        return [...prevSizes, value];
      }
    });
  };


  

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image",image);


    // Append each selected size to formData
    selectedSizes.forEach(size => formData.append("size[]", size));


    try {
      // Send the formData to your backend
      const response = await axios.post(`${url}/api/product/add`, formData);

      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Men",
          size: []
        });
        setImage(false);
        setSelectedSizes([]); // Reset selected sizes
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form.");
    }
  };


  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>

          <input 
          onChange={(e) => setImage(e.target.files[0])} 
          type="file"
           id='image' 
           hidden 
           required />
        </div>


        <div className="add-product-name flex-col">
          <p>Product name</p>

          <input 
          onChange={onChangeHandler} 
          value={data.name} type="text" 
          name='name' placeholder='Type here' 
          className='border border-black'  />

        </div>


        <div className="add-product-description flex-col">
          <p>Product Description</p>

          <textarea 
          onChange={onChangeHandler} 
          value={data.description} 
          name="description" 
          rows="6"
          placeholder='Write content here' 
          className='border border-black ' >

          </textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category" className='border border-black ' >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' className='border border-black ' />
          </div>
        </div>

        <div>
          <h3>Select Sizes</h3>
          <div className='flex gap-3'>

            <label className='flex gap-1'>
              <input
                type="checkbox"
                value="S"
                onChange={handleSizeChange}
                checked={selectedSizes.includes("S")}
                
              />
              S
            </label>
            <label className='flex gap-1'>
              <input
                type="checkbox"
                value="M"
                onChange={handleSizeChange}
                checked={selectedSizes.includes("M")}
              />
              M
            </label>
            <label className='flex gap-1'>
              <input
                type="checkbox"
                value="L"
                onChange={handleSizeChange}
                checked={selectedSizes.includes("L")}
              />
              L
            </label>
            <label className='flex gap-1'>
              <input
                type="checkbox"
                value="XL"
                onChange={handleSizeChange}
                checked={selectedSizes.includes("XL")}
              />
              XL
            </label>
          </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;

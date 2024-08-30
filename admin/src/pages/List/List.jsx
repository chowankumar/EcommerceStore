import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios";
import {toast} from "react-toastify"

const List = ({url}) => {
  const [list,setList] = useState([]);



  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/product/fetchproducts`);
    if(response.data){
      setList(response.data);
     }else{
          toast.error("Item not Fetched")
    }

  }




  const removeFood=async(id)=>{
    const response = await axios.post(`${url}/api/product/deleteproduct`,{id:id})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }else{
      toast.error("not remove food")
    }

  }
 
  useEffect(()=>{
    fetchList()

  },[])
  return (
    <div className='list add flex-col'> 
    <p>All Food List</p>
    <div className="list-table">
      <div className="list-table-format title">
        <b>image</b>
        <b>name</b>
        <b>category</b>
        <b>price</b>
        <b>action</b>
      </div>
      {
        list.map((item,index)=>{
          return(
          <div key={index} className='list-table-format'>
             
          <img src={`${url}/images/`+item.image} 
          alt="" />
          {console.log(`${url}/images/`+item.image)}
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item.id)}  className='cursor'>x</p>
            </div>
          )

        })
      }
    </div>

    </div>
  )
}

export default List
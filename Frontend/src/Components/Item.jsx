import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
        <Link to={`/product/${props.id}`}><img src={props.img} alt="" /></Link>
         <div>
            <p>{props.name}</p>
            <p className='flex gap-4'>
              <p> ${props.nprice} </p>
              <p className='text-gray-500 line-through'>${props.oprice}</p>
            </p>
            
        </div> 
    </div>
  )
}

export default Item
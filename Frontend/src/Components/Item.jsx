import React from 'react'

const Item = (props) => {
  return (
    <div>
        <img src={props.img} alt="" />
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
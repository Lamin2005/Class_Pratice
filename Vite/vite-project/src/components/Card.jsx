import React from 'react'

function Card() {
  return (
    <div className='max-w-xs bg-blue-200 p-5 rounded-xl mx-auto shadow'>
        <div className='w-full h-40 bg-amber-50 rounded-md'></div>
        <h1 className='text-left text-black font-bold text-xl my-2'>Card Title</h1>
        <p className='text-black-300 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium enim praesentium ab ratione maiores itaque saepe, omnis corporis ipsam eius temporibus sapiente</p>
        <button className='w-full rounded-md bg-blue-500 text-white my-2 p-2 font-bold cursor-pointer'>Click To Buy</button>
    </div>
  )
}

export default Card
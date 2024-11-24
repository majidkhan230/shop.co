import React from 'react'
import Button from './Button'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

function AddCounter({counterStyles,increment,decrement,countValue}) {
  return (
    <div className={`w-[160px] px-4 py-2 bg-gray-200  rounded-full flex justify-between items-baseline space-x-4 `}>
      <button onClick={increment}  ><PlusOutlined className='text-xl font-bold' /></button>
        <span className='text-xl font-bold mx-2'>{countValue}</span>
      <button onClick={decrement}><MinusOutlined className='text-xl font-bold' /></button>
    </div>
  )
}

export default AddCounter
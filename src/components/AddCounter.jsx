import React from 'react'
import Button from './Button'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

function AddCounter({counterStyles,increment,decrement,countValue}) {
  return (
    <div className={`w-[180px] px-4 py-2 bg-gray-200  rounded-full flex justify-between items-baseline space-x-4 `}>
      <button onClick={increment}  ><PlusOutlined className='text-2xl font-bold' /></button>
        <span className='text-2xl font-bold mx-2'>{countValue}</span>
      <button onClick={decrement}><MinusOutlined className='text-2xl font-bold' /></button>
    </div>
  )
}

export default AddCounter
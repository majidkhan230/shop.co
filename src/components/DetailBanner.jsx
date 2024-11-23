import { Rate } from 'antd'
import React, { useState } from 'react'
import Line from './Line'
import Button from './Button'
import AddCounter from './AddCounter'

function DetailBanner() {
  const [countValue,setCountValue] = useState(0);
  const increment = ()=>(
    setCountValue((prev)=>prev + 1)
  )  
  const decrement = ()=>(
    setCountValue((prev)=>prev - 1)
  )  
  
  return (
    <div>
        <div className="grid md:grid-cols-6 md:p-4 gap-4 ">
          
            <div className="flex flex-row md:flex-col  gap-2">
                <h1 className='w-24 h-24 bg-blue-300 '>img1</h1>
                <h1 className='w-24 h-24 bg-blue-300 '>img1</h1>
                <h1 className='w-24 h-24 bg-blue-300 '>img1</h1>
            </div>
            <div className='col-span-2'></div>
            <div className='flex flex-col col-span-3  space-y-2'>
                <h1 className='font-[integralcf] text-4xl'>One Life Graphic T-Shirt</h1>
                <Rate disabled value={2.5}></Rate>
                <h1 className='font-bold text-2xl'><ins > $260</ins> &nbsp; <del className='text-gray-300'>  $300</del> <span className='px-2  bg-pink-100 text-red-400 rounded-full text-center '>-40%</span> </h1>
                <Line/>
                <div className="colors">
                  <h1 className='font-light'>Select Colors</h1>
                  <div className=' flex space-x-2 mt-2'>
                      <div className="cirlce w-8 h-8 rounded-full  bg-[#4E4630] "></div>
                      <div className="cirlce w-8 h-8 rounded-full bg-[#314F4A]"></div>
                      <div className="cirlce w-8 h-8 rounded-full bg-[#31344F]"></div>
                  </div>
                </div>
                <Line/>
                <div className="size">
                  <h1 className='font-light '>Choose Size</h1>
<div className="flex space-x-2  mt-2">
  <Button btnStyles={'bg-gray-200 hover:bg-black hover:text-white  '} textStyles={" font-light"} text={"Small"} />
  <Button btnStyles={'bg-gray-200 hover:bg-black hover:text-white  '} textStyles={" font-light"} text={"Medium"} />
  <Button btnStyles={'bg-gray-200 hover:bg-black hover:text-white  '} textStyles={" font-light"} text={"Large"} />
  <Button btnStyles={'bg-gray-200 hover:bg-black hover:text-white  '} textStyles={" font-light"} text={"X-Large"} />
</div>
                </div>
                <Line/>
                <div className="flex space-x-2  ">
                  <AddCounter
                  increment={increment}
                  decrement={decrement}
                  countValue={countValue}
                  />
                  <Button btnStyles={"w-full bg-black hover:bg-white text-white hover:text-black hover:border-4 hover:boder-black"} text={"Add to Cart"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailBanner
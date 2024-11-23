import { Rate } from 'antd'
import React from 'react'
import Line from './Line'

function DetailBanner() {
  return (
    <div>
        <div className="grid md:grid-cols-6 ">
          
            <div className="flex flex-row md:flex-col  gap-2">
                <h1 className='w-24 h-24 bg-blue-300 '>img1</h1>
                <h1 className='w-24 h-24 bg-blue-300 '>img1</h1>
                <h1 className='w-24 h-24 bg-blue-300 '>img1</h1>
            </div>
            <div className='col-span-2'></div>
            <div className='flex flex-col col-span-3  space-y-2'>
                <h1 className='font-[integralcf] text-4xl'>One Life Graphic T-Shirt</h1>
                <Rate disabled value={2.5}></Rate>
                <h1 className='font-bold text-2xl'><ins >$260</ins> <del className='text-gray-300'>$300</del> </h1>
                <Line/>
            </div>
        </div>
    </div>
  )
}

export default DetailBanner
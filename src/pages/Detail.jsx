import React from 'react'
import MyBreadCrumb from '../components/MyBreadCrumb'
import DetailBanner from '../components/DetailBanner'

function Detail() {
  return (
    <div className='w-full p-4 md:px-20 ' >
      <MyBreadCrumb/>
      <DetailBanner/>
    </div>
  )
}

export default Detail
import React from 'react'
import { customerReviews } from '../utils/constants/customerReview'
import CustomerReviewCard from '../components/CustomerReviewCard'
function RatingAndReviews() {
  return (
    <div>
      <div className="top flex justify-between mb-10">
        <h1>All Reviews</h1>
        <div className="buttons flex">
          <h1>btn1</h1>
          <h1>btn2</h1>
          <h1>btn3</h1>
        </div>
      </div>
      <div className=" reviews flex flex-col md:flex-row flex-wrap    ">
        {customerReviews.map((item,index)=>{
          const {name,rating,comment} = item
          return (
            <CustomerReviewCard containerStyle="bg-red-300 "  key={index} name={name} rating={rating} review={comment} />
          )
        })}
      </div>
    </div>
  )
}

export default RatingAndReviews
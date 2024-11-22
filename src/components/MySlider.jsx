import React from 'react';
import { Carousel } from 'antd';
import { customerReviews } from "../utils/constants/customerReview";
import CustomerReviewCard from './CustomerReviewCard';

const MySlider = () => (
    <Carousel arrows   infinite={false}>
{
  customerReviews.map((item,index)=>{
    return(
    <CustomerReviewCard key={index} name={item.name} rating={item.rating}  review={item.review} />
    )
  })
}
    </Carousel>
  
);
export default MySlider;
import React from 'react';
import { Card, Rate } from 'antd';
const { Meta } = Card;
const CustomCard = ({data}) => {
    const {title,image,price,description,rating} = data
return(
    <Card
    hoverable
    style={{
      width: "95%",
     
    }}
    cover={<img alt="example" src={image} style={{
        objectFit:"contain",
        width:'100%',
        height:"200px",
        marginTop:"10px",
    }} />}
  >
    <Meta title={title} />
    <div className="flex space-x-2 mt-2  ">
    <Rate allowHalf defaultValue={rating.rate} className='flex flex-nowrap text-sm ' />
<span>{rating.rate}/5</span>
    </div>
    <h1 className='text-xl md:text-2xl font-bold my-2'>${price}</h1>
  </Card>
)
};
export default CustomCard;
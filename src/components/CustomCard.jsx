import React from 'react';
import { Card, Rate } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
const { Meta } = Card;
const CustomCard = ({data}) => {
  const dispatch = useDispatch();
    const {title,image,price,description,rating} = data
return(
    <Card
    hoverable
    style={{
      width: "95%",
      position:"relative",
    }}
    cover={<img alt="example" src={image} style={{
        objectFit:"contain",
        width:'100%',
        height:"200px",
        marginTop:"10px",
    }}
     
    />}
  >
    <Meta title={title} />
    <div className="flex space-x-2 mt-2  ">
    <Rate allowHalf defaultValue={rating.rate} className='flex flex-nowrap text-sm ' />
<span>{rating.rate}/5</span>
    </div>
    <h1 className='text-xl md:text-2xl font-bold my-2'>${price}</h1>
    <div className=" cart absolute top-2 right-2  "><ShoppingCartOutlined   onClick={() => dispatch({
                type:"addtocart",payload:data,
              })} className='text-2xl md:text-4xl mr-2' /></div>
  </Card>
)
};
export default CustomCard;
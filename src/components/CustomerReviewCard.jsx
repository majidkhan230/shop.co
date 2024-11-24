import React from 'react';
import { Card, Avatar, Rate, Typography } from 'antd';

const { Title, Text } = Typography;

const CustomerReviewCard = ({ name, review, rating,containerStyle }) => (
  <Card
    className={`md:w-1/2    height-[200px]    ${containerStyle}`}
    >
    <Card.Meta
      title={  <Rate disabled value={rating} style={{
        fontSize:'18px'
      }} />}
    />
    <div style={{ marginTop: 10 }}>
      <h1 className='font-semibold text-xl'>{name}</h1>
      <p className='text-sm '>{review}</p>
    </div>
  </Card>
);

export default CustomerReviewCard;

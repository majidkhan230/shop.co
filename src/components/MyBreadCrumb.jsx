import React from 'react';
import { Breadcrumb } from 'antd';
const MyBreadCrumb = () => (
  <Breadcrumb
  style={{
   paddingTop:"10px",
   paddingBottom:"10px",
  }}
  className='py-4'
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default MyBreadCrumb;
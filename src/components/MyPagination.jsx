import React from 'react';
import { Pagination } from 'antd';
const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const MyPagination = () => <Pagination total={500} itemRender={itemRender} style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"5px 0px 5px 0px"
}} />;
export default MyPagination;
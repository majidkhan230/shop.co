import React from 'react'
import MyMenu from '../components/MyMenu'
import MyBreadCrumb from '../components/MyBreadCrumb'
// import { myProducts } from '../utils/constants/products';
import CustomCard from '../components/CustomCard';
import MyDropDown from '../components/MyDropDown';
import MyPagination from '../components/MyPagination';
import { useSelector } from 'react-redux';

function Products() {
  const products = useSelector((state)=>state.products)

  // console.log("shop",products)
  return (
    <div className='w-full px-4 md:px-20'>
      <MyBreadCrumb/>
      <div className="container w-full flex   ">
      <aside  className='hidden md:block md:w-1/5 border rounded-xl md:p-4'>
        <MyMenu/>
      </aside>
      <div className=" products md:w-4/5 md:px-4">
      <div className="top flex justify-between items-center md:px-2  md:p-0">
        <h1 className='text-3xl font-bold'>Casuals</h1>
        <div className="sort flex items-center space-x-2 ">
          Sort by : <MyDropDown styleDropDown={'w-fit px-1 my-0 text-sm bg-transparent border-0  '} />
        </div>
      </div>
      <div className=' grid grid-cols-2  md:grid-cols-3 gap-2 p-2'>
        {products.map((item, index) => {
            return <CustomCard key={index} data={item} />;
          })}
      </div>
      <div className="pagination">
        <MyPagination/>
      </div>
      </div>  
      </div>
    </div>
  )
}

export default Products
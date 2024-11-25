import React from 'react'
import MyMenu from '../components/MyMenu'
import MyBreadCrumb from '../components/MyBreadCrumb'
import { myProducts } from '../utils/constants/products';
import CustomCard from '../components/CustomCard';
import MyDropDown from '../components/MyDropDown';
import MyPagination from '../components/MyPagination';

function Products() {
  return (
    <div className='w-full px-20'>
      <MyBreadCrumb/>
      <div className="container w-full flex border">
      <aside  className='w-1/5 border p-4'>
        <MyMenu/>
      </aside>
      <div className="products w-4/5 p-4">
      <div className="top flex justify-between items-center">
        <h1 className='text-2xl font-bold'>Casuals</h1>
        <div className="sort flex items-center space-x-2 ">
          Sort by : <MyDropDown styleDropDown={'w-fit px-1 my-0 text-sm bg-transparent border-0 '} />
        </div>
      </div>
      <div className=' grid grid-cols-3 gap-2 p-2'>
        {myProducts.map((item, index) => {
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
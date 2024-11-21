import React from 'react'
import SearchInput from './Search'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

function Header() {
  return (
    <div className='bg-pink-300 w-full h-[60px] sticky flex items-center justify-between px-20'>
        <div className="logo font-extrabold text-2xl font-[integralcf]">Shop.Co</div>
        <ul className="navigation flex space-x-4  font-[satoshi]">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
        <div className="search min-w-[500px]">
            <SearchInput/>
        </div>
        <div className='flex  items-center space-x-2'>
        <ShoppingCartOutlined style={{
          fontSize:30,
        }} />
        <Avatar icon={<UserOutlined />} />
        </div>

    </div>
  )
}

export default Header
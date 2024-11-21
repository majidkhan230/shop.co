import React, { useState } from 'react'
import SearchInput from './Search'
import { MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import DrawerFeedback from './Drawer'

function Header() {
  const [open, setOpen] = useState(false);



  const handleMenu = ()=>(
    setOpen(true)
  )
  
  
  return (
    <div className='bg-pink-300 w-full h-[60px] sticky flex items-center justify-between px-4 md:px-20'>
      <div className="flex space-x-2 items-baseline">
      <MenuOutlined className='md:hidden' onClick={()=>handleMenu()} style={{fontSize:24}}/>
        <div className="logo font-extrabold text-3xl font-[integralcf]">Shop.Co</div>
      </div>
        <ul className="navigation hidden md:flex  space-x-4  font-[satoshi]">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
        <div className="hidden md:block search min-w-[500px]">
            <SearchInput/>
        </div>
        <div className='flex  items-center space-x-2'>
        <SearchOutlined style={{fontSize:30}} className='md:hidden'/>
        <ShoppingCartOutlined style={{
          fontSize:30,
        }} />
        <Avatar icon={<UserOutlined />} />
        </div>
        <DrawerFeedback  open={open} setOpen={setOpen}></DrawerFeedback>
    </div>
  )
}

export default Header
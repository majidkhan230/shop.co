import React from 'react'
import SearchInput from './Search'

function Header() {
  return (
    <div className='bg-pink-300 w-full h-[60px] sticky flex '>
        <div className="logo">Logo</div>
        <ul className="navigation flex">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
        <div className="search">
            <SearchInput/>
        </div>

    </div>
  )
}

export default Header
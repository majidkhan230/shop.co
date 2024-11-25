import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
const DrawerFeed = ({open,setOpen}) => {
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
    
      <Drawer  onClose={onClose} open={open}>
      <ul className="navigation text-2xl  font-[satoshi]">
      <li><Link to={"/products"}>Shop</Link></li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
      </Drawer>
    </>
  );
};
export default DrawerFeed;
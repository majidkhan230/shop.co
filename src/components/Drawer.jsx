import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
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
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
      </Drawer>
    </>
  );
};
export default DrawerFeed;
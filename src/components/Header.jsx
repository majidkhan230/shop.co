import React, { useState } from "react";
import SearchInput from "./Search";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import DrawerFeedback from "./Drawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const res = useSelector((state) => state.addtocart);
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(true);
  return (
    <div className=" w-full h-[60px] sticky flex items-center justify-between px-4 md:px-20 ">
      <div className="flex space-x-2 items-baseline">
        <MenuOutlined
          className="md:hidden"
          onClick={() => handleMenu()}
          style={{ fontSize: 24 }}
        />
        <Link to={"/"}>
          <div className="logo font-extrabold text-3xl font-[integralcf] pb-2">
            Shop.Co
          </div>
        </Link>
      </div>
      <ul className="navigation hidden md:flex space-x-4  font-[satoshi]">
        <li>
          <Link to={"/products"}>Shop</Link>
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className="hidden md:block search min-w-[500px]">
        <SearchInput />
      </div>
      <div className="flex  items-center space-x-2">
        <SearchOutlined
          onClick={() => alert("search")}
          style={{ fontSize: 30 }}
          className="md:hidden"
        />
        <Link to="/cart">
          <Badge count={res.length}>
            <ShoppingCartOutlined
              style={{
                fontSize: 30,
                marginRight: 8,
              }}
            />
          </Badge>
        </Link>
        <Avatar icon={<UserOutlined />} />
      </div>
      <DrawerFeedback open={open} setOpen={setOpen}></DrawerFeedback>
      {/* <div className="absolute top-4  right-0 w-full px-10">
        <SearchInput  />
        </div> */}
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const items = [
  {
    label: "Product Details",
    key: "product-details",
    icon: <MailOutlined />,
  },
  {
    label: "Rating & Reviews",
    key: "reviews",
    icon: <AppstoreOutlined />,
  },
  {
    label: "FAQs",
    key: "faqs",
    icon: <SettingOutlined />,
  },
];
const MyMenuBar = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    navigate(`/detail/${e.key}`);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />

      <div className="main">
        <Outlet />
      </div>
    </>
  );
};
export default MyMenuBar;

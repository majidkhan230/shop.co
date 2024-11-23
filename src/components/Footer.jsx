import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <div className="w-full mt-40 relative ">
  <div className="top  bg-black w-4/6 absolute -top-24 left-1/2 transform -translate-x-1/2 md:flex flex-col md:flex-row justify-between p-6 md:p-10 rounded-2xl overflow-hidden">
        <h1 className=" text-white font-[integralcf] text-lg md:text-4xl">
          Stay Upto Date About <br/> Out Latest Offers
        </h1>
        <div className="flex flex-col gap-2 ">
          
    <input type="text" className="w-full bg-white rounded-full px-4 py-2 text-md" placeholder="Enter your email address" />
          <Button
              text={"Subscribe to Newletter"}
              btnStyles={"bg-white w-full "}
              textStyles={"text-black  text-md"}
              onClick={() => alert("clicked on btn")}
            />

        </div>
      </div>
      <div className="content">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-[#F0F0F0] p-4 pt-24 md:p-20 ">
          <div className="flex flex-col space-y-2">
            <div className="logo font-extrabold text-3xl font-[integralcf] pb-2">
              Shop.Co
            </div>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-2">
              <TwitterOutlined className=" md:text-2xl" />
              <FacebookOutlined className=" md:text-2xl" />
              <InstagramOutlined className=" md:text-2xl" />
              <GithubOutlined className=" md:text-2xl" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">Company</h1>
            <h3>About</h3>
            <h3>Features</h3>
            <h3>Work</h3>
            <h3>Career</h3>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">Help</h1>
            <h3>About</h3>
            <h3>Features</h3>
            <h3>Work</h3>
            <h3>Career</h3>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">FAQ</h1>
            <h3>About</h3>
            <h3>Features</h3>
            <h3>Work</h3>
            <h3>Career</h3>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">Resources</h1>
            <h3>About</h3>
            <h3>Features</h3>
            <h3>Work</h3>
            <h3>Career</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

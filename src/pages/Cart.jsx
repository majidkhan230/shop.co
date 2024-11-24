import React from "react";
import MyBreadCrumb from "../components/MyBreadCrumb";
import AddCounter from "../components/AddCounter";
import Line from "../components/Line";
import { CiCircleFilled } from "@ant-design/icons";
import Button from "../components/Button";

function Cart() {
  return (
    <div className="w-full p-4 md:px-20">
      <div className="breadcrumb my-5">
        <MyBreadCrumb />
      </div>
      <h1 className="text-4xl font-[integralcf]">Your Cart</h1>
      <div className="flex gap-2 mt-10 flex-col md:flex-row ">
        <div className="cartContainer  h-[400px] md:w-3/5 rounded-md border-2 border-gray-200 flex flex-col  md:gap-2 md:p-4 overflow-y-auto">
           <div className="card  w-full  p-3 flex  border-2 border-gray-200">
            <div className="image w-1/4 h-full object-cover bg-red-300">
              image
            </div>
            <div className="flex flex-col w-3/4 ml-2">
              <div className="flex">
                <h1>Gradient Graphic T-shirt</h1>
                <div className="icon">delete</div>
              </div>
              <div className="size">Size:Large</div>
              <div className="color">Color:White</div>
              <div className="price flex justify-between">
                <h1 className="font-bold text-2xl ">$140</h1>
                <AddCounter counterStyles={""} />
              </div>
            </div>
          </div>
        </div>
        <div className="summary w-full md:w-2/5 border-2 rounded-md flex flex-col mt-4 md:mt-0 p-2 md:p-4">
          <h1 className="font-bold text-2xl">Order Summary</h1>
          <div className="flex justify-between">
            <h3>SubTotal</h3>
            <h3 className="font-semibold">$565</h3>
          </div>
          <div className="flex justify-between">
            <h3>Discount</h3>
            <h3 className="font-semibold text-red-500">-$565</h3>
          </div>
          <div className="flex justify-between">
            <h3>Delivery Fee</h3>
            <h3 className="font-semibold">$565</h3>
          </div>
          <Line />
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3 className="font-semibold">$565</h3>
          </div>
          <div className="promo flex gap-2">
            <div className="input rounded-full bg-gray-200 p-2 space-x-2">
              <CiCircleFilled />
              <input
                type="text"
                className="bg-transparent"
                placeholder="add promo code"
              />
            </div>
            <Button
              text={"Apply"}
              btnStyles={
                "bg-black text-white hover:bg-white hover:text-black border border-gray-200"
              }
            />
          </div>
          <Button
              text={"Go to Checkout "}
              btnStyles={
                "bg-black text-white hover:bg-white hover:text-black border border-gray-200 mt-3"
              }
            />
        </div>
      </div>
    </div>
  );
}

export default Cart;

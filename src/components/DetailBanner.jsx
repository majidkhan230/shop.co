import { Rate } from 'antd';
import React, { useState } from 'react';
import Line from './Line';
import Button from './Button';
import AddCounter from './AddCounter';
import { images } from '../utils/constants/images';

function DetailBanner() {
  const [countValue, setCountValue] = useState(0);
  const [showImage, setShowImage] = useState(images[0]?.image || "");

  const increment = () => setCountValue((prev) => prev + 1);
  const decrement = () => setCountValue((prev) => Math.max(prev - 1, 0));

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        {/* Thumbnail Images */}
        <div className="flex md:flex-col gap-2 items-center justify-center md:items-end">
          {images.slice(0, 3).map(({ image }, index) => (
            <img
              key={index}
              onClick={() => setShowImage(image)}
              src={image}
              alt={`Thumbnail ${index}`}
              className="object-cover w-24 h-20 md:w-28 md:h-32 border-2 rounded-xl overflow-hidden border-gray-100 cursor-pointer"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="md:col-span-2 h-64 my-auto md:h-96">
  <img
    src={showImage}
    alt="Selected"
    className="w-full h-full object-cover rounded-xl"
  />
</div>


        {/* Product Details */}
        <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
          <h1 className="font-[integralcf] text-2xl md:text-4xl">
            One Life Graphic T-Shirt
          </h1>
          <Rate disabled value={2.5} />
          <h1 className="font-bold text-lg md:text-2xl">
            <ins>$260</ins>&nbsp;
            <del className="text-gray-300">$300</del>
            <span className="px-2 bg-pink-100 text-red-400 rounded-full text-sm md:text-base">
              -40%
            </span>
          </h1>

          <Line />

          {/* Colors */}
          <div className="colors">
            <h1 className="font-light">Select Colors</h1>
            <div className="flex space-x-2 mt-2">
              <div className="circle w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#4E4630]"></div>
              <div className="circle w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#314F4A]"></div>
              <div className="circle w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#31344F]"></div>
            </div>
          </div>

          <Line />

          {/* Sizes */}
          <div className="size">
            <h1 className="font-light">Choose Size</h1>
            <div className="flex md:space-x-2  mt-2">
              <Button
                btnStyles="bg-gray-200 hover:bg-black hover:text-white"
                textStyles="font-light"
                text="Small"
              />
              <Button
                btnStyles="bg-gray-200 hover:bg-black hover:text-white"
                textStyles="font-light"
                text="Medium"
              />
              <Button
                btnStyles="bg-gray-200 hover:bg-black hover:text-white"
                textStyles="font-light"
                text="Large"
              />
              <Button
                btnStyles="bg-gray-200 hover:bg-black hover:text-white"
                textStyles="font-light"
                text="X-Large"
              />
            </div>
          </div>

          <Line />

          {/* Add to Cart */}
          <div className="flex  flex-row  md:space-y-0 space-x-2">
            <AddCounter
              increment={increment}
              decrement={decrement}
              countValue={countValue}
            />
            <Button
              btnStyles="w-full bg-black mt-0 hover:bg-white text-white hover:text-black border-2 border-transparent hover:border-black"
              text="Add to Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBanner;

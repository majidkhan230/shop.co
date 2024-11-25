import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Button from "./Button";

function Banner({ title, products }) {
  const [val, setVal] = useState(4);

  const handleBtn = () => setVal((prev) => val + 4);

  return (
    <div className="w-full p-4 md:px-20 ">
      <h1 className="text-center font-bold font-[integralcf] my-10 text-4xl md:text-5xl ">
        {title}
      </h1>
      <div className="cardContainer grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.slice(0, val).map((item, index) => {
          return <CustomCard key={index} data={item} />;
        })}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleBtn}
          btnStyles={
            "md:w-[200px]  bg-white px-20 md:px-10  rounded-full border-2 border-gay-400 my-5 md:my-10 hover:bg-gray-200"
          }
          textStyles={"text-black font-semibold"}
          text={"View All"}
        />
      </div>
    </div>
  );
}

export default Banner;

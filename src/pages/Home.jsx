import React from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";
import Banner from "../components/Banner";

function Home() {
  return (
<div>
  {/* Top Page */}
<div>
<div className="px-4 md:px-20 w-full bg-[#F2F0F1]   flex flex-col  md:flex-row">
      <div className="left md:w-1/2 flex flex-col  justify-center ">
        <h1 className="py-5 text-4xl font-[integralcf] text-start font-semibold  md:text-5xl  md:mb-10">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className=" text-opacity-75 text-start mb-5  ">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button
          text={"Shop Now"}
          btnStyles={"bg-black w-full  mb-10"}
          textStyles={"text-white text-xl"}
          onClick={() => alert("clicked on btn")}
        />

        <div className="flex space-x-4 flex-wrap justify-center md:flex-nowrap md:justify-normal gap-2">
<Counter  countValue={"200"} SubText={"International Brands"}/>
<Counter  countValue={"200"} SubText={"International Brands"}/>
<Counter  countValue={"200"} SubText={"International Brands"}/>
        </div>
        
      </div>
      <div className="right md:w-1/2 ">
        <img src="../assets/images/trendy-couple.jpg" className="object-cover object-top w-full h-[600px]" alt="" />
      </div>
      
    </div>
    <div className="black bg-black text-white h-30  md:h-20 p-2   flex justify-evenly  flex-wrap">
      <img src="/assets/images/p1.png" className="object-contain "></img>
      <img src="/assets/images/p2.png" className="object-contain"></img>
      <img src="/assets/images/p3.png" className="object-contain"></img>
      <img src="/assets/images/p4.png" className="object-contain"></img>
      <img src="/assets/images/p5.png" className="object-contain"></img>
    </div>
</div>

{/* page2 */}
<Banner title={"New Arrivals"} />


</div>



  );
}

export default Home;

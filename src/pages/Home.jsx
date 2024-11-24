import React, { useState } from "react";
import Counter from "../components/Counter";

import Banner from "../components/Banner";
import CustomerReviewCard from "../components/CustomerReviewCard";
import MySlider from "../components/MySlider";
import { myProducts } from "../utils/constants/products";
import { customerReviews } from "../utils/constants/customerReview";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";

function Home() {
const [products,setProducts] = useState(myProducts);
const dispatch = useDispatch()
const res = useSelector((state)=>state)
console.log(res)
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
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <Button
              text={"Shop Now"}
              btnStyles={"bg-black w-full md:w-fit  mb-10"}
              textStyles={"text-white text-xl"}
              onClick={() => dispatch({
                type:"addtocart",payload:[{name:'majid'}],
              })}
            />

            <div className="flex space-x-4 flex-wrap justify-center md:flex-nowrap md:justify-normal gap-2">
              <Counter countValue={"200"} SubText={"International Brands"} />
              <Counter countValue={"200"} SubText={"International Brands"} />
              <Counter countValue={"200"} SubText={"International Brands"} />
            </div>
          </div>
          <div className="right md:w-1/2 ">
            <img
              src="../assets/images/trendy-couple.jpg"
              className="object-cover object-top w-full h-[600px]"
              alt=""
            />
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
      <Banner
        title={"New Arrivals"}
        products={products}
        setProducts={setProducts}
      />

      <Banner
        title={"Top Selling"}
        products={products}
        setProducts={setProducts}
      />


      {/* page3 */}
      <div className="bg-[#F2F0F1] rounded-2xl w-full max-w-[800px] p-10 mx-auto">
  <h1 className="text-center font-bold font-[integralcf] mb-10 text-3xl md:text-5xl">
    Browse By Dress Style
  </h1>

  <div className="grid   grid-cols-1 sm:grid-cols-2 gap-4  ">
    <div className="bg-white font-semibold flex items-center justify-end h-36 rounded-md text-center relative">
      <span className='absolute top-2 left-2 text-2xl'>Casual</span>
      <img src="/assets/images/img1.png" className="object-contain w-52 " alt=""  />
    </div>
    <div className="bg-white font-semibold flex items-center justify-end h-36 rounded-md text-center relative">
      <span className='absolute top-2 left-2 text-2xl'>Formal</span>
      <img src="/assets/images/img2.png" className="object-contain " alt=""  />
    </div>
    <div className="bg-white font-semibold flex items-center justify-end h-36 rounded-md text-center relative">
      <span className="absolute top-2 left-2 text-2xl">Party</span>
      <img src="/assets/images/img3.png" className="object-cover h-full" alt=""  />

    </div>
    <div className="bg-white font-semibold flex items-center justify-end  h-36 rounded-md text-center relative">
      <span className='absolute top-2 left-2 text-2xl'>Office</span>
      <img src="/assets/images/img4.png" className="object-cover h-full " alt=""  />

    </div>
  </div>
</div>


   {/* page4 */}
   {/* <div className="flex flex-col md:flex-row flex-nowrap  overflow-hidden  items-center md:justify-center mt-5 md:mt-10 gap-2 md:gap-4">
   {
  customerReviews.map((item,index)=>{

    return(
      <CustomerReviewCard  key={index} name={item.name} rating={item.rating}  review={item.comment} />
    )
  })
}
   </div> */}



    </div>
  );
}

export default Home;

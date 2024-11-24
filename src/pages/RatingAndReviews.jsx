import React from "react";
import { customerReviews } from "../utils/constants/customerReview";
import CustomerReviewCard from "../components/CustomerReviewCard";
import Button from "../components/Button";
import { SettingOutlined } from "@ant-design/icons";
import MyDropDown from "../components/MyDropDown";

function RatingAndReviews() {
  return (
    <div>
      <div className="top flex justify-between my-5 ">
        <h1 className=" p-2 font-bold text-2xl  md:text-3xl align-text-bottom">All Reviews</h1>
        <div className="buttons flex space-x-2">
          <SettingOutlined className="text-2xl md:text-3xl " />
            <MyDropDown styleDropDown={""} />
          <Button
            text={"Write a Review"}
            textStyles={"text-md"}
            btnStyles={
              "bg-black hover:bg-white text-white hover:text-black border-2 border-gray-100"
            }
          />
        </div>
      </div>
      <div className=" reviews flex flex-col md:flex-row flex-wrap    gap-2  ">
        {customerReviews.map((item, index) => {
          const { name, rating, comment } = item;
          return (
            <CustomerReviewCard
              key={index}
              name={name}
              rating={rating}
              review={comment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RatingAndReviews;

import React from "react";
import Title from "./../components/Title.jsx";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "./../components/NewsLetterBox.jsx";

const Contact = () => {
  return (
    <>
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            204 Pitt Street
            <br /> Suite 435, Townhall, Sydney
          </p>
          <p className="text-gray-500">
            Ph: (+61 433 566 766)
            <br /> Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="border border-black text-sm px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </>
  );
};

export default Contact;

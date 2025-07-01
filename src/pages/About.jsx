import React from "react";
import Title from "./../components/Title.jsx";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "./../components/NewsLetterBox.jsx";

const About = () => {
  return (
    <>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <h2 className="text-2xl">
            Welcome to Forever – Timeless Style for Every Generation
          </h2>
          <p>
            At Forever, we believe great style never fades. That’s why we offer
            thoughtfully curated clothing collections for men, women, and kids —
            designed to bring comfort, confidence, and character into every
            wardrobe.
          </p>
          <p>
            Founded with a passion for quality and a love for fashion that
            lasts, Forever is more than just a clothing brand — it’s a
            lifestyle. Whether you’re dressing up for a special occasion or
            keeping it casual for the everyday moments, our pieces are crafted
            to fit your life and your look.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To create stylish, high-quality clothing that empowers people of all
            ages to feel confident, express themselves, and live boldly — every
            day.
          </p>

          <b className="text-gray-800">A Note from the Founder</b>
          <p>
            Forever started with a simple goal — to make fashion feel personal
            again. We wanted clothes that don’t just look good in photos, but
            feel right in real life. Designed with real families in mind,
            Forever is built for everyone — from the littlest trendsetters to
            grown-up style lovers. Thanks for growing with us — your story is
            part of ours. — The Forever Team
          </p>
        </div>
      </div>
      <div className="text-2xl pl-15 py-8">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="w-[90vw] max-w-7xl mx-auto grid gap-6 md:grid-cols-3 text-sm mb-20 px-4 sm:px-6">
        {/* Quality Assurance */}
        <div className="border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-gray-800">
            Quality Assurance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At Forever, every garment goes through strict quality checks. From
            fabric to finish, we ensure our clothes meet high standards — so you
            always get reliable, long-lasting fashion you can trust.
          </p>
        </div>

        {/* Convenience */}
        <div className="border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-gray-800">Convenience</h3>
          <p className="text-gray-600 leading-relaxed">
            We make shopping easy and stress-free. With a user-friendly website,
            fast shipping, and clear policies, Forever offers a smooth
            experience — so you can shop confidently, anytime, from anywhere.
          </p>
        </div>

        {/* Exceptional Customer Service */}
        <div className="border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-gray-800">
            Exceptional Customer Service
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our team is here to help. Whether it’s sizing questions or order
            support, we’re committed to providing fast, friendly, and helpful
            service — because your satisfaction always comes first at Forever.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </>
  );
};

export default About;

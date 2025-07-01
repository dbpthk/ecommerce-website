import Title from "./../components/Title.jsx";
import CartTotal from "./../components/CartTotal.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

const PlaceOrder = () => {
  const [method, setMethod] = useState("mastercard");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300">
      {/* leftside */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3 max-w-[80vw]">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3 max-w-[80vw]">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3 max-w-[80vw]">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="tel"
          placeholder="Phone number"
        />
      </div>

      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div className="flex items-center gap-3 border border-gray-300 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "applepay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                onClick={() => setMethod("applepay")}
                className="h-8 mr-4"
                src={assets.applepay_logo}
                alt=""
              />
            </div>
            <div className="flex items-center gap-3 border border-gray-300 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "afterpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                onClick={() => setMethod("afterpay")}
                className="h-8 mr-4"
                src={assets.afterpay_logo}
                alt=""
              />
            </div>
            <div className="flex items-center gap-3 border border-gray-300 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "mastercard" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                onClick={() => setMethod("mastercard")}
                className="h-5 mr-4"
                src={assets.mastercard_logo}
                alt=""
              />
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-13 py-3 text-sm cursor-pointer hover:bg-gray-700"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

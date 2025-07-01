import Title from "./../components/Title.jsx";
import CartTotal from "./../components/CartTotal.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

const PlaceOrder = () => {
  const [method, setMethod] = useState("mastercard");
  const { navigate } = useContext(ShopContext);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const isFormValid = Object.values(form).every((val) => val.trim() !== "");

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300">
      {/* leftside */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3 max-w-[80vw]">
          <input
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
            required
          />
          <input
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
            required
          />
        </div>

        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
          required
        />

        <input
          value={form.street}
          onChange={(e) => setForm({ ...form, street: e.target.value })}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
          required
        />

        <div className="flex gap-3 max-w-[80vw]">
          <input
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            required
          />
          <input
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            required
          />
        </div>

        <div className="flex gap-3 max-w-[80vw]">
          <input
            value={form.zipcode}
            onChange={(e) => setForm({ ...form, zipcode: e.target.value })}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
            required
          />
          <input
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
            required
          />
        </div>

        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="tel"
          placeholder="Phone number"
          required
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
            {["applepay", "afterpay", "mastercard"].map((m) => (
              <div
                key={m}
                className="flex items-center gap-3 border border-gray-300 px-3 cursor-pointer"
                onClick={() => setMethod(m)}
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === m ? "bg-green-400" : ""
                  }`}
                ></p>
                <img
                  className={`h-8 mr-4 ${m === "mastercard" ? "h-5" : "h-8"}`}
                  src={
                    m === "applepay"
                      ? assets.applepay_logo
                      : m === "afterpay"
                      ? assets.afterpay_logo
                      : assets.mastercard_logo
                  }
                  alt={m}
                />
              </div>
            ))}
          </div>

          <div className="w-full text-end mt-8">
            <button
              disabled={!isFormValid}
              onClick={() => navigate("/orders")}
              className={`px-13 py-3 text-sm text-white transition ${
                isFormValid
                  ? "bg-black hover:bg-gray-700 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
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

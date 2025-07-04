import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll scrollbar-hide justify-between sm:justify-normal sm:w-[18.99%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrik-0 cursor-pointer active:scale-105"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info  */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 sm:hover:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="text-gray-700 mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is avilable on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and review section  */}

      <div className="mt-20">
        <div className="flex">
          <p className="border border-gray-300  px-5 py-3 text-sm">
            Description
          </p>
          <p className="border border-gray-300  px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>

        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            Crafted from durable stretch denim, these slim fit jeans hug your
            silhouette without sacrificing comfort. Perfect for dressing up or
            down, they feature a classic five-pocket design, subtle fading, and
            a mid-rise waist. A go-to staple for every modern wardrobe. Crafted
            from durable stretch denim, these slim fit jeans hug your silhouette
            without sacrificing comfort. Perfect for dressing up or down, they
            feature a classic five-pocket design, subtle fading, and a mid-rise
            waist. A go-to staple for every modern wardrobe.
          </p>
          <p>
            Add retro vibes to your everyday look with this soft cotton graphic
            tee. Featuring a faded vintage print and relaxed fit, it’s perfect
            for layering or wearing solo. Style it with ripped jeans or shorts
            for an effortlessly cool outfit. Stay sharp and breezy with our
            premium linen blend shirt. Lightweight, breathable, and tailored for
            a modern fit, it’s your warm-weather essential. Ideal for both
            casual weekends and smart-casual events.
          </p>
        </div>
      </div>
      {/* display related products  */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : null;
};

export default Product;

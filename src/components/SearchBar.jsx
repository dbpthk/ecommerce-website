import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="bg-gray-50 border-t border-b py-6">
      <div className="mx-auto w-11/12 sm:w-3/4 md:w-1/2 px-4">
        <div className="flex items-center gap-3 w-full px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus-within:shadow-md transition-all">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <img className="w-4" src={assets.search_icon} alt="" />
          <img
            onClick={() => setShowSearch(false)}
            className="inline w-3 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchBar;

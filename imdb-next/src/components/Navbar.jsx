"use client";
import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex text-white dark:text-gray-900 bg-amber-600 dark:bg-gray-100 p-4 lg:text-lg justify-center gap-6 ">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;

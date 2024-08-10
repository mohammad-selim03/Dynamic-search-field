"use client";
import React, { useState } from "react";
import Container from "../Container";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

const SearchFeild = () => {
  // const [searchValue, SetSearchValue] = useState("");

  return (
    <Container>
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchValue}
          onChange={(e) => SetSearchValue(e.target.value)}
          className="w-full h-10  border-2 border-red-400 outline-none px-4 "
        />
        {searchValue && (
          <span
            onClick={() => SetSearchValue("")}
            className="h-10 w-10 absolute top-0 right-10 text-red-400 text-xl inline-flex items-center justify-center cursor-pointer"
          >
            <RiCloseLine />
          </span>
        )}
        <span className="h-10 w-10 text-2xl bg-lime-500 text-white absolute top-0 right-0 inline-flex justify-center items-center">
          {" "}
          <RiSearchLine />
        </span>
      </div>
    </Container>  
    // not mandetory as well.
  );
};

export default SearchFeild;

import React, { useState } from "react";
import useBlogCall from "../hook/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { getData } = useBlogCall();
  

  useEffect(() => {
    getData("blogs/");
  }, []);

  return <div>Home</div>;
};

export default Home;

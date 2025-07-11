
import React, { useState } from "react";
import useBlogCall from "../hook/useBlogCall";
import { useEffect } from "react";


const Home = () => {
  const { getData } = useBlogCall();
  const {}


  useEffect(() => {
    getData("blogs/");
  }, []);


  return <div>Home</div>;
};

export default Home;

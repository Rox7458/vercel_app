import React, { useState } from "react";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { getData } = useStockCall();
  

  useEffect(() => {
    getData("blogs/");
  }, []);

  return <div>Home</div>;
};

export default Home;

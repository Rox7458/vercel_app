import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, firmSuccess } from "../features/BlogSlice";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  

  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${url}`);
      
      dispatch(firmSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getData };
};

export default useBlogCall;

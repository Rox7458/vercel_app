import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, firmSuccess, blogSuccess } from "../features/BlogSlice";
import { useNavigate } from "react-router-dom";

const useBlogCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  //! FETCH BLOG DATA
  const getData = async (url) => {
    dispatch(fetchStart());
    navigate("/");
    try {
      const { data } = await axios(`${BASE_URL}${url}`);
      dispatch(firmSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //! CREATE MEW BLOG

  const createBlogData = async (url,info) => {
    dispatch(fetchStart());
    navigate("/newblog");

    try {
      const { data } = await post(url, info);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getData, createBlogData };
};

export default useBlogCall;

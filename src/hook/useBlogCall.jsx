
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { fetchFail, fetchStart, stockSuccess, ProCatBrandSuccess, SalesBrandProSuccess } from "../features/blogSlice";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getData,
  };
};

export default useBlogCall;

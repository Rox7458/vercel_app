import React, { useState } from "react";
import useBlogCall from "../hook/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/cards/BlogCard";

const Home = () => {
  const { getData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);

  
  useEffect(() => {
    getData("blogs/");
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;

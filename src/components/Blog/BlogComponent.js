import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogComponent = () => {
  return (
    <div className="blog">
      <div className="container-lg">
        <div className="top">
          <div className="title">
            <h3 className="text-uppercase">Les derniers blogs</h3>
          </div>
        </div>
        <ul className="card-container flex flex-between">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </ul>
      </div>
    </div>
  );
};

export default BlogComponent;

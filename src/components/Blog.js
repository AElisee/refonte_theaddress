import React from "react";
import { Link } from "react-router-dom";
import { data } from "../defaultData/data";
import BlogCard from "./BlogCard";
import SeeAllLink from "./SeeAllLink";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="top">
          <div className="left">
            <h3>Les derniers blogs</h3>
          </div>
          <div className="right">
            <SeeAllLink />
          </div>
        </div>
        <ul className="card-container">
          {data.slice(0, 3).map((el) => (
            <BlogCard />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;

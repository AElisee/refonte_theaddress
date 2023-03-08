import React from "react";
import { Link } from "react-router-dom";
import { data } from "../defaultData/data";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="top">
          <div className="left">
            <h3>Les derniers blogs</h3>
          </div>
          <div className="right">
            <Link to="" id="all">
              <span>Voir tout</span>
              <img
                src="/icons/arrow-narrow-right.svg"
                alt="arrow-narrow-right"
              />
            </Link>
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

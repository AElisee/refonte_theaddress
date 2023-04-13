import React from "react";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="top">
          <div className="title">
            <h3 className="text-uppercase">Les derniers blogs</h3>
          </div>
        </div>
        <ul className="card-container flex flex-between">
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </div>
  );
};

export default Blog;

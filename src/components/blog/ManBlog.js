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
          <Card
            title="man blog"
            img="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_960_720.jpg"
          />
          <Card
            title="man blog"
            img="https://cdn.pixabay.com/photo/2016/10/25/23/37/man-1770309_960_720.png"
          />
          <Card
            title="man blog"
            img="https://cdn.pixabay.com/photo/2016/11/21/14/30/man-1845715_960_720.jpg"
          />
        </ul>
      </div>
    </div>
  );
};

export default Blog;

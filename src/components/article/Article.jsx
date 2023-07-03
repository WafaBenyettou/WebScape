import React from "react";
import "./article.css";

const Article = ({ img, date, title }) => {
  return (
    <div className="webscape-blog-container-article">
      <div className="webscape-blog-container-article-image">
        <img src={img} alt="article" />
      </div>
      <div className="webscape-blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read more...</p>
      </div>
    </div>
  );
};

export default Article;

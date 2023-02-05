import React from "react";

const Author = ({ author }) => (
  <h4 className="author" style={{ fontSize: "0.85rem" }}>
    {author.toUpperCase()}
  </h4>
);

export default Author;

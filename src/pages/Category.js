import React from "react";
import { useParams } from "react-router-dom";
const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <div className="h-96">{category}</div>
    </div>
  );
};

export default Category;

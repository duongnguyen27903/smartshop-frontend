import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

const Card = (products) => {
  const { id, name, image, price } = products.products;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`${id}`);
  }

  return (
    <div className="p-2" onClick={handleClick}>
      <div className="text-2xl h-16 p-2">{name}</div>
      <img src={image.img} alt={`${name}-img`} className="object-center h-30" />
      <div className="text-2xl">Price : {`$${price}`}</div>
    </div>
  );
};

const Category = () => {
  const { brandId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`shop/get_products?id=${brandId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [brandId]);

  return (
    <div className="m-5 grid lg:grid-cols-3 lg:gap-12 md:grid-cols-1 gap-2 font-serif">
      {data &&
        data.map((products, index) => {
          return <Card products={products} key={index} />;
        })}
    </div>
  );
};

export default Category;

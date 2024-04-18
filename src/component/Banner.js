import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [chose, setChose] = useState(1);
  useEffect(() => {
    api
      .get("shop/get_best_seller")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (data)
    return (
      <div className="relative z-0 w-full h-full overflow-hidden">
        <img
          onClick={() => {
            navigate(`${data[chose].brandid}/${data[chose].id}`);
          }}
          className="absolute z-0 h-full w-full object-cover "
          src={data[chose].image.img}
          alt="sieu xe"
        />
        <div className="absolute left-5 top-5 animate-[changecolor_2s_infinite] text-6xl">
          {data[chose].name}
        </div>
        <div className="absolute text-5xl italic bg-red-600 text-yellow-300 h-72 w-72 rounded-full -right-36 -top-36">
          <span className="absolute left-10 bottom-16">Hot!</span>
        </div>
        <div className="absolute right-0 bottom-5 flex flex-row group">
          {data
            .filter((val) => val.identity !== chose)
            .map((val) => {
              return (
                <div key={val.identity}>
                  <img
                    onClick={() => {
                      setChose(val.identity);
                    }}
                    src={val.image.img}
                    alt="sieu xe"
                    className="object-cover h-16 w-16 rounded-md ring-2 ring-white relative hover:z-50 group-hover:scale-105 group-hover:transition-all hover:!scale-125 "
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  return <div>Error Internet connection</div>;
};

export default Banner;

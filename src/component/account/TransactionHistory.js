import React, { useEffect, useState } from "react";
import { auth_api } from "../../api/api";
import { errorform } from "../../authen/SignIn";

const TransactionHistory = () => {
  const [data, setData] = useState();
  const user = localStorage.getItem("user");
  const [pages, setPages] = useState(0);
  if (user) {
    var info = JSON.parse(user);
  }
  const [page, setPage] = useState(1);

  useEffect(() => {
    auth_api
      .get(
        `account/get_transaction_histories?userId=${info?.user.id}&page=${page}`
      )
      .then((res) => {
        setData(res.data.data);
        setPages(res.data.pages);
      })
      .catch((err) => {
        alert(errorform(err));
      });
  }, [page]);

  if (data)
    return (
      <div>
        <div>TRANSACTION HISTORY</div>
        <div className="flex flex-col gap-2">
          {data.map((val) => {
            const time = val.timeAt.replace("Z", "").split("T");
            const day = time[0];
            const hour = time[1];

            return (
              <div key={val.id} className="border-black border">
                <div>
                  At {hour} in {day}
                </div>
                <div>Content : {val.note}</div>
                <div className="flex-nowrap">
                  Account balance :{" "}
                  <span
                    className={`${
                      Number(val.amount) > 0
                        ? "inline text-green-500"
                        : "hidden"
                    }`}
                  >
                    +
                  </span>
                  <span
                    className={`${
                      Number(val.amount) > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {Number(val.amount).toLocaleString()}
                  </span>
                </div>
                <div className={`${!val.from ? "hidden" : "block"}`}>
                  From : {val.from}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-center gap-2 p-2 ">
          {Array.from(Array(pages).keys())
            .map((x) => x + 1)
            .map((val) => {
              return (
                <button
                  key={val}
                  onClick={() => {
                    setPage(val);
                  }}
                  className={`h-8 w-8 border border-black ${
                    page === val ? "bg-sky-500" : ""
                  }`}
                >
                  {val}
                </button>
              );
            })}
        </div>
      </div>
    );
};

export default TransactionHistory;

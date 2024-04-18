import React, { Fragment, useRef, useState } from "react";
import Profile from "./Profiles";
import Currency from "./Currency";
import TransactionHistory from "./TransactionHistory";

const service = [
  {
    id: 1,
    name: "Profile",
    component: Profile,
  },
  {
    id: 2,
    name: "Account",
    component: Currency,
  },
  {
    id: 3,
    name: "Transaction History",
    component: TransactionHistory,
  },
];

const Account = () => {
  const pick = useRef(1);
  const [chose, setChose] = useState(pick.current);

  return (
    <div className="font-serif text-xl flex flex-row gap-2">
      <div className="w-1/6 h-full flex flex-col gap-2">
        {service.map((val) => {
          return (
            <div
              className={`${
                chose === val.id ? "text-sky-600" : ""
              } cursor-pointer`}
              key={val.id}
              onClick={() => {
                setChose(val.id);
                pick.current = val.id;
              }}
            >
              {val.name}
            </div>
          );
        })}
      </div>
      <div className="w-2/3">
        {service
          .filter((val) => val.id === chose)
          .map((ser) => {
            const Part = ser.component;
            return (
              <Fragment key={ser.id}>
                <Part />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Account;

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React, { useState } from "react";

function FooterItem({ title, items }) {
  const [show, setShow] = useState(false);
  const showLinks = () => {
    setShow(!show);
  };
  return (
    <div className="mx-auto my-5">
      <div className="flex justify-between">
        <h1 className="font-md mb-5">{title}</h1>
        <span
          className="flex cursor-pointer hover:text-white md:hidden"
          onClick={showLinks}
        >
          <KeyboardArrowDownIcon />
        </span>
      </div>
      <div
        className={`${!show && "hidden"}${
          title === "BROWSE" ? " md:grid grid-cols-4" : " md:grid"
        }`}
      >
        {items.map((item) => (
          <p
            key={item}
            className="mb-1 text-gray-500 cursor-pointer hover:text-white hover:scale-105"
            href="#"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FooterItem;

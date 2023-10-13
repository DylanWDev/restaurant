import React, { useState } from "react";

function MenuDiv(props) {
  console.log(props.menuItems);
  return (
    <div
      id="mainContainDiv"
      className="overflow-y-auto mt-5 border border-secondary p-3"
    >
      <div>
        <h1 className="text-center mb-0 p-4 pb-5">OUR MENU</h1>
      </div>
      <div className="border-top border-bottom mx-4">
        <p className="m-0 p-3 ps-0">APPETIZERS</p>
      </div>

      <div className="mt-4">
        {props.menuItems.map((menuItem, index) => (
          <div key={index}>
            <h2>{menuItem.title}</h2>
            <p>{menuItem.price}</p>
            <p>{menuItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuDiv;

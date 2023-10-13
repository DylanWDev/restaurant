import React from "react";

function MenuDiv(props) {
  // Filter the menu items to get only the first 6 appetizers
  const appetizers = props.menuItems
    .filter((menuItem) => menuItem.category === "Appetizer")
    .slice(0, 15);

  return (
    <div
      id="mainContainDiv"
      className="overflow-y-auto mt-5 border border-secondary p-3"
    >
      <div>
        <h2 className="text-center mb-0 p-4 pb-5">OUR MENU</h2>
      </div>
      <div className="border-top border-bottom mx-4">
        <h5 className="m-0 p-3 ps-0">APPETIZERS</h5>
      </div>

      <div className="mt-4">
        {appetizers.map((menuItem, index) => (
          <div key={index}>
            <h6>{menuItem.title}</h6>
            <p>{menuItem.price}</p>
            <p>{menuItem.description}</p>
          </div>
        ))}
      </div>

      <div className="border-top border-bottom mx-4">
        <h5 className="m-0 p-3 ps-0">LUNCH</h5>
      </div>

      <div>
        <p className="mt-4">WE DON"T SERVE LUNCH</p>
      </div>
    </div>
  );
}

export default MenuDiv;

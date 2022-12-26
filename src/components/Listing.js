import React from "react";
import Items from "./Items";

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map(item => (<Items item={item} key={Math.random()} />))}
    </div>
  );
};

export default Listing;
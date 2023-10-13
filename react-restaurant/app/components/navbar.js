import React, { useState } from "react";
import Logo from "next/image";

function Navbar() {
  return (
    <div id="navDiv" className="">
      <div
        id="navbar"
        className="border border-secondary"
        style={{ display: "flex", alignItems: "center" }}
      >
        <a>
          <Logo
            src="/M-logo.png"
            alt="cool image"
            className="p-1 m-3"
            width={50}
            height={50}
          />
        </a>
        <h1 style={{ flex: 1, marginRight: "82px" }} className="text-center">
          The Appetizer
        </h1>
      </div>
    </div>
  );
}

export default Navbar;

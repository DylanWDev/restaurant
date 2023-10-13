"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar";
import MenuDiv from "./components/menuDiv";

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);

  // function axiosCall() {
  useEffect(() => {
    axios.get("https://www.jsonkeeper.com/b/MDXW").then((response) => {
      console.log(response);
      setMenuItems(response.data);
    });
  }, []);

  console.log(menuItems);

  return (
    <>
      <div className="container">
        <Navbar />
        <MenuDiv menuItems={menuItems} />
      </div>
    </>
  );
}

import React, { useState } from "react";

const Navbar = ({ setProductId }) => {
  const [newProdId, setNewProdId] = useState("");

  const searchHandler = () => {
    setProductId(newProdId);
    setNewProdId("");
  };

  const changeHandler = (e) => {
    setNewProdId(String(e.target.value));
  };

  const changeColor = () => {
    if (
      getComputedStyle(document.documentElement).getPropertyValue(
        "--main-color"
      ) === " rgb(123, 212, 123)"
    ) {
      document.documentElement.style.setProperty(
        "--main-color",
        "rgb(58, 54, 54)"
      );
      document.querySelector(".logo").style.color = "rgb(255, 255, 255)";
      document
        .querySelectorAll(".rp-card, .yo-card")
        .forEach((item) => (item.style.color = "rgb(255, 255, 255)"));
    } else {
      document.documentElement.style.setProperty(
        "--main-color",
        " rgb(123, 212, 123)"
      );
      document.querySelector(".logo").style.color = "rgb(0, 0, 0)";
      document
        .querySelectorAll(".rp-card, .yo-card")
        .forEach((item) => (item.style.color = "rgb(0, 0, 0)"));
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={changeColor}>
        TRENDZ
      </div>
      <div className="search-area">
        <input type="text" value={newProdId} onChange={changeHandler} />
        <button className="search-button" onClick={searchHandler}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

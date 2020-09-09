import React, { Component } from "react";
import "../menu-item/menu-item.component.scss";
const MenuItem = ({ title, ImgUrl, Size }) => {
  return (
    <div className={`${Size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${ImgUrl})` }}
        className="background-img"
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

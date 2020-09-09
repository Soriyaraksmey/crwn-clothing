import React, { Component } from "react";
import "../menu-item/menu-item.component.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-img"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

//higher oder component is a componet that take an another componer as an parameter and retuen a new
//one component that modified

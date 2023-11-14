import React from "react";
import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Summary Dashboard
      </a>
      <a className="menu-item" href="/salads">
        Attendance Tracking
      </a>
      <a className="menu-item" href="/pizzas">
        Behavioral Analytics
      </a>
      <a className="menu-item" href="/desserts">
        Academic Performance Tracking
      </a>
    </Menu>
  );
};

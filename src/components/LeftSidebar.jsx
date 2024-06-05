import React from "react";
import home from "../assets/home@2x.png";
import notfication from "../assets/notification@2x.png";
import heart from "../assets/heart@2x.png";
import message from "../assets/message@2x.png";
import favorite from "../assets/favorite@2x.png";
import settings from "../assets/setting@2x.png";
import profile from "../assets/profile@2x.png";
import logout from "../assets/logout@2x.png";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <ul className="nav-links">
        <li style={{ color: "black" }}>
          <img src={home} height={16} alt="" />
          Home
        </li>
        <li>
          <img src={notfication} height={16} alt="" />
          Notifications
        </li>
        <li>
          <img src={heart} height={16} alt="" />
          Shop
        </li>
        <li>
          <img src={message} height={16} alt="" />
          Conversation
        </li>
        <li>
          <img src={message} height={16} alt="" />
          Wallet
        </li>
        <li>
          <img src={favorite} height={16} alt="" />
          Subscription
        </li>
        <li>
          <img src={profile} height={16} alt="" />
          My Profile
        </li>
        <li>
          <img src={settings} height={16} alt="" />
          Settings
        </li>
      </ul>

      <div className="footer-links">
        <button className="btn">
          <img src={logout} height={16} alt="" />
          Log out
        </button>
      </div>
      <div className="endcredits">
        <div style={{ marginRight: "14px" }}>2022@logo name</div>
        <div>Developed by ivan Infotech</div>
      </div>
    </div>
  );
}

export default LeftSidebar;

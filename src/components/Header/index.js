import React from "react";
import { Layout } from "antd";
import "./header.less";
import logo from "../../assets/images/logo.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";
import { ReactComponent as BasketIcon } from "../../assets/icons/Basket.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/Menu.svg";

export default function Header(props) {
  const { isMobile } = props;

  return (
    <Layout.Header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-container">
        {isMobile ? (
          <React.Fragment>
            <div className="menu-option">
              <SearchIcon />
            </div>
            <div className="menu-option">
              <BasketIcon />
            </div>
            <div className="menu-option">
              <MenuIcon />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="menu-option">
              <SearchIcon />
              <span className="menu-option-text">Search</span>
            </div>
            <div className="menu-option">Help</div>
            <div className="menu-option">Account</div>
            <div className="menu-option">
              <BasketIcon />
            </div>
          </React.Fragment>
        )}
      </div>
    </Layout.Header>
  );
}

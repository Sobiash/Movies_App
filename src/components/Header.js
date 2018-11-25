import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <Link
        to="/Movies_App"
        className="navigation-link"
        style={{ color: "#f5821e", textDecoration: "none" }}
      >
        <h1 className="App-title">Movies App</h1>
      </Link>
    </header>
  );
};
export default Header;

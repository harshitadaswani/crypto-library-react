import React from "react";
import "./navbar.css";
import { BsHeartFill, BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="nav-left">
        <Link to="/" className="txt-l fw-black p-s m-s">
          Crypto&nbsp;Library
        </Link>
      </div>

      <div className="relative">
        <input
          type="search"
          name="searchbar"
          className="p-s m-s input-box br-s"
          placeholder="Search items here"
        />
        <span className="input-icon">
          <FaSearch size={22} />
        </span>
      </div>

      <div className="nav-right p-s m-xs">
        <button className="btn btn-link m-m">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </nav>
  );
}

export { Navbar };

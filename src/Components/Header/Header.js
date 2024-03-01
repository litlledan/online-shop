import React from "react";
import { Link } from "react-router-dom";
import serach from "../../assets/svg/01.svg";
import wishlist from "../../assets/svg/02.svg";
import cart from "../../assets/svg/03.svg";
import account from "../../assets/svg/04.svg";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.user);
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-bar">
          <div className="logo">
            <Link to="/">Exclusive</Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Sing Up</Link>
            </li>
          </ul>
        </div>
        <div className="nav-bar-card">
          <div className="serach">
            <input type="rext" placeholder="What are you looking for?" />
            <img src={serach} alt="search" />
          </div>
          <div className="nav-bar-icon">
            <Link className="nav-icon" to="/wishlist">
              <img src={wishlist} alt="wishlist" />
              <div className="count">3</div>
            </Link>
            <Link to="/cart">
              <img src={cart} alt="cart" />
            </Link>
            {user && (
              <Link to="/account">
                <img className="account-avatar" src={user.avatar ? user.avatar : account} alt="account" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

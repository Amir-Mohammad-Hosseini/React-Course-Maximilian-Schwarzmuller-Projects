import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNaviagation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" end className={({isActive}) => isActive ? classes.active : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="products" className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNaviagation;

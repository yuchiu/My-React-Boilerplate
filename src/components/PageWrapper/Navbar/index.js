import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import { DefaultButton } from "@/components/common";

const Navbar = () => (
  <nav className="navbar-wrapper">
    <section className="navbar-start">
      <Link className="navbar-start__item no-highlight" to="/">
        <DefaultButton> React Boilerplate </DefaultButton>
      </Link>
    </section>
    <section className="navbar-end">
      <Link className="navbar-end__item no-highlight" to="/about">
        <DefaultButton> About </DefaultButton>
      </Link>
    </section>
  </nav>
);

export default Navbar;

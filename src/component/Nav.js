import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div>
      <Link to="/poke" className="link">
        Axios - Pokemon
      </Link>
      <Link to="/cal" className="link">
        Calculator - Multiplication & Division
      </Link>
      <Link to="/search" className="link">
        Search In Tabel
      </Link>
      <Link to="/todo" className="link">
        To Do List
      </Link>
    </div>
  );
};

export default Nav;

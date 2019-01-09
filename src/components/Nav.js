import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="navbar-nav">
            <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/"
                exact={true}
            >
                Home
            </NavLink>
            <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/list/"
            >
                List
            </NavLink>
        </div>
    </nav>
);

export { Nav }; 

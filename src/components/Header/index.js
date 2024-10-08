/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Nav } from "./styles";


export default function Header() {
    return (
        <Nav>
            <Link to="/"><FaHome size={24}/></Link>
            <Link to="/login"><FaUserAlt size={24}/></Link>
            <Link to="/logout"><FaSignInAlt size={24}/></Link>
        </Nav>
    );
}

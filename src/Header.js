import React from 'react';
import logo from './images/GQ-Life-Sciences_AnApteanCompany_Logo_300DPI.jpg';
import './App.css';
import {
    BrowserRouter as NavLink
} from "react-router-dom";

export default function Header() {

    return (
        <div>
            <header className="page-header">
                <div className="container">
                    <nav className="navbar">

                        <NavLink className="logo" to="/">
                            <img src={logo} alt="Logo" />
                        </NavLink>
                        <div>
                            <strong className="dash">Dashboard</strong>
                        </div>
                        <div>
                            <ul className='menu'>
                                <li><NavLink to="/system_status">System Status </NavLink></li>
                                <li><NavLink to="/content_production">Content Production </NavLink></li>
                                <li><NavLink to="/user_control">User Control </NavLink></li>
                                <li><NavLink to="/usage_report">Usage Report </NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            </div>
    );
};
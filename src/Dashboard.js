import React, { useState } from 'react';
import logo from './images/GQ-Life-Sciences_AnApteanCompany_Logo_300DPI.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Content_Production from './Content_Production';
import User_Control from './User_Control';

export default function Dashboard() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Router>
            <header className="page-header">
                <div className="container">
                    <nav className="navbar">
                        <NavLink to="/">
                            <img className="logo" src={logo} alt="Logo" />
                        </NavLink>
                        <div>
                            <strong className="dash">Dashboard</strong>
                        </div>
                        <div>
                            <ul className={click ? 'menu' : "collapse-menu"}>
                                <li><NavLink to="/system_status">System Status </NavLink></li>
                                <li><NavLink to="/content_production">Content Production </NavLink></li>
                                <li><NavLink to="/user_control">User Control </NavLink></li>
                                <li><NavLink to="/usage_report">Usage Report </NavLink></li>
                            </ul>
                        </div>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className= {click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </nav>
                </div>
            </header>

            <Switch>
                <Route path="/content_production">
                    <Content_Production click={click}/>
                </Route>
                <Route path="/user_control">
                    <User_Control />
                </Route>
            </Switch>
        </Router>
    );
};

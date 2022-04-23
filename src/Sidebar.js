import React from 'react'
import './dashboard.css'
import {NavLink, useRouteMatch} from 'react-router-dom'

export const Sidebar = () => {
    let { path, url } = useRouteMatch();
    return (
    <div className="sidebar-container">
        <div className="basic-info">
            <img className="avatar-image" src="https://cdn-icons-png.flaticon.com/512/146/146035.png" alt="" />
            <div className="name-wrapper">
                <p className="name">Manav Shah</p>
                <p className="email">210130107517@gecgan.gujgov.edu.in</p>
            </div>
        </div>
        <div className="navbar-container">
            <NavLink className="navbar-elements" activeClassName="navbar-active" to={`${url}`} exact={true}>Dashboard</NavLink>
            <NavLink className="navbar-elements" activeClassName="navbar-active" to={`${url}/activity`}>Activity Points</NavLink>
            <NavLink className="navbar-elements" activeClassName="navbar-active" to={`${url}/scolarship`}>Scolarship</NavLink>
            <NavLink className="navbar-elements" activeClassName="navbar-active" to={`${url}/payment`}>Payments and Fees</NavLink>
            <NavLink className="navbar-elements" activeClassName="navbar-active" to={`${url}/profile`}>Profile</NavLink>
            <NavLink className="navbar-elements" activeClassName="navbar-active" to={`${url}/about`}>About</NavLink>
        </div>
        <div className="logout">
            <i className="fa fa-power-off power" aria-hidden="true"></i> Log Out
        </div>
    </div>
  )
}

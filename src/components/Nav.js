import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
function Nav() {
    return (
        <div className="bg-dark text-warning p-3 fs-5 divi">
            <div>
                <h2 className="text-warning">CITY COMPANION</h2>
            </div>
            
            <div>
            <ul className="nav nav-tabs justify-content-end bg-dark text-warning p-3 fs-5 ">
                <li className="nav-item">
                    <NavLink className="link" to=" ">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="register">
                        Register
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="technologies">
                        Services
                    </NavLink>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Nav

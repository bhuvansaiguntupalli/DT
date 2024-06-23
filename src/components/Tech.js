import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './Tech.css'
function Tech() {
    return (
        <div>
            <ul className="nav justify-content-center mt-5">
                <li className="nav-item">
                    <Link to="react" className="link">Accmodation</Link>
                </li>
                <li className="nav-item">
                    <Link to="angular" className="link">Work Oppurtunities</Link>
                </li>
                <li className="nav-item">
                    <Link to="vue" className="link">Travel Assistance</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Tech

import React from 'react'
import Nav from './Nav'
import {Outlet} from 'react-router-dom'
function Route() {
    return (
        <div>
            <Nav/>
            <div className="mt-5 container" style={{minHeight:"90vh"}}>
            <Outlet/>
            </div>
        </div>
    )
}

export default Route

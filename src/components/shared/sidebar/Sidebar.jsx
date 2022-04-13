import React from 'react';
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "var(--action-color)" : "",
    });
    return (
        <aside>
            <div className='sidebar-flex'>
                <NavLink style={getActiveStyle} to="/" className={({ isActive }) => isActive ? "p-xs m-xs fw-bold" : "p-xs m-xs"}>Home</NavLink>
                <NavLink style={getActiveStyle} to="/videos" className={({ isActive }) => isActive ? "p-xs m-xs fw-bold" : "p-xs m-xs"}>Explore</NavLink>
                <NavLink style={getActiveStyle} to="/liked" className={({ isActive }) => isActive ? "p-xs m-xs fw-bold" : "p-xs m-xs"}>Liked</NavLink>
                <NavLink style={getActiveStyle} to="/watchlist" className={({ isActive }) => isActive ? "p-xs m-xs fw-bold" : "p-xs m-xs"}>Watch Later</NavLink>
                <NavLink style={getActiveStyle} to="/history" className={({ isActive }) => isActive ? "p-xs m-xs fw-bold" : "p-xs m-xs"}>History</NavLink>
                <NavLink style={getActiveStyle} to="/playlist" className={({ isActive }) => isActive ? "p-xs m-xs fw-bold" : "p-xs m-xs"}>PlayList</NavLink>
            </div>
        </aside>
    )
}

import React from 'react';
import {
    NavLink
} from 'react-router-dom'


export const NavBar = () => {

    let activeClassName = 'nlActive';
    let inactiveClassName = 'navlink';



    return (
        <>
            <input className="ch_hamb" type="checkbox" id="side-menu"/>
            <NavLink
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName}
                to="./my-work">
                My Work
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName}
                to="./my-skills">My Skills</NavLink>
            <div className='logoNavBar'>
                <label className="hamb" htmlFor="side-menu">
                    <pre className="symbol" data-close="✖" data-open="☰"> </pre>
                </label>
                <div className="logo">
                    <NavLink to='./' className="logoBorder" data-text="<PEHUEN&nbsp;ASSALONE&nbsp;&#47;&#62;">&#60;PEHUEN&nbsp;ASSALONE&nbsp;&#47;&#62;</NavLink>
                    <NavLink to='./' className="logoBorder logoSmall" data-text="<PEHUEN&#47;&#62;">&#60;PEHUEN&#47;&#62;</NavLink>

                </div>
            </div>

            <NavLink
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName}
                to="./about">About Me</NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName}
                to="./contact">Contact</NavLink>
        </>
    )
}
export default NavBar;
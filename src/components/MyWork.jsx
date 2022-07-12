
import "./page.css"
import React from 'react'
import { Gallery } from "./Gallery";

export const MyWork = () => {
  
  (document.getElementById("side-menu") || {}).checked = false;
  return (
    <div className="page disableScrollbar noOverflow">
      <div className="textContainer ">
        <span>My Work</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
      </div>
      <div className="banner">
        <Gallery />
      </div>
    </div>

  )
}

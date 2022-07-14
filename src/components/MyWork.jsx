
import "./page.css"
import React from 'react'
import { Gallery } from "./Gallery";

export const MyWork = () => {

  (document.getElementById("side-menu") || {}).checked = false;
  return (
    <div className="fullPage disableScrollbar noOverflow">
      <Gallery />

    </div>

  )
}

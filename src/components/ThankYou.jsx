
import "./page.css"
import React from 'react'

export const ThankYou = () => {
  
  (document.getElementById("side-menu") || {}).checked = false;
  return (
    <div className="page disableScrollbar noOverflow">
      <div className="textContainer ">
        <span>Thank You</span>
        <p> :D We'll be in touch soon</p>

      </div>
      <div className="banner">
      </div>
    </div>

  )
}

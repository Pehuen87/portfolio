import React from 'react';
import { About } from './About';
import { Contact } from './Contact'
import { MySkills } from './MySkills';
import { MyWork } from './MyWork';

import './page.css'
/* */



export const HomeScreen = () => {

  (document.getElementById("side-menu") || {}).checked = false;

  return (
    <>
      <div className="scrollDown">
        <span>scroll down</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x">
          <path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" className="">
          </path>
        </svg>
      </div>
      <div className='slider disableScrollbar'>
        <div><MySkills /></div>
        <div><About /></div>
        <div><MyWork /></div>
        <div><Contact /></div>
      </div>
    </>
  )
}


import React from "react";
import "./page.css"


export const About = () => {

  (document.getElementById("side-menu") || {}).checked = false;
  return (
    <div className="page disableScrollbar">
      <div className="textContainer">
        <span className="title">Hi, I'm <span className="capital">Pehuén</span>, Web Developer...</span>
        <p> ...located in Buenos Aires, Argentina. I'm a curious person, always serching for experiences that allow me to learn new things.</p>
        <p>I see myself as a practical person, willing to share different points of view and activities with pairs and generate a collaborative and comfortable work environment. </p>
        <p> I like to walk in the park and ride my bike or my longboard with friends. I have two cats and I'm huge fan of coop video games and a tattoo enthusiast</p>
      </div>
      <div className="mapouter banner">
        <div className="gmap_canvas">
          <iframe width="100%" height="500" title="iframe1" id="gmap_canvas" src={"https://maps.google.com/maps?q=buenos%20aires&t=&z=7&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
          </iframe>

        </div>
        <div className="floatingBanner">
          <span>
            <p>Pehuén Assalone</p>
            <p>Temperley - Buenos Aires, Argentina</p>
            <a href="https://www.linkedin.com/in/pehuen-assalone" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-linkedin-in fa-w-14 fa-5x">
                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" class="">
                </path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>

  )
}


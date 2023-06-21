import React from "react";
import WorldOfWords from "./WorldOfWords"
import "./page.css"


export const MySkills = () => {
  
  (document.getElementById("side-menu") || {}).checked = false;
  return (
    <div className="page disableScrollbar">
      <div className="textContainer">
        <span className="title">My Skills</span>
        <p>I’ve been working as a developer since 2011, in the beginning I made IT solutions using C# and SQL while I was studying Systems Engineering at UTN.</p>
        <p>In the last 5 years I’ve been working as a Freelance Full-Stack Developer, doing remote work, providing advise and collaborating in small work teams. This allowed me to meet talented people with whom I shared the greatest experiences.</p>
        <p>My goal as a Web Developer is to make solutions that will adapt to every user requirement, with dinamic UI and responsive design. To achive that I apply my knowledge about several technologies, such as HTML, CSS, JavaScript, SASS, LESS and React.</p>
        <p>My main interest is to work in a collaborative team that leads to a constant learning, and collective and personal improvement.</p>
      </div>
      <div className="banner">
        <div className="highBanner">

          <div className="chart">
            <span>HTML & CSS</span>
            <footer>
              <div data-width="95%" style={{ width: '95%' }}></div>
            </footer>
          </div>

          <div className="chart">
            <span>React.js</span>
            <footer>
              <div data-width="90%" style={{ width: '90%' }}></div>
            </footer>
          </div>

          <div className="chart">
            <span>Redux</span>
            <footer>
              <div data-width="80%" style={{ width: '80%' }}></div>
            </footer>
          </div>


          <div className="chart">
            <span>JavaScript</span>
            <footer>
              <div data-width="80%" style={{ width: '80%' }}></div>
            </footer>
          </div>

          <div className="chart">
            <span>TypeScript</span>
            <footer>
              <div data-width="70%" style={{ width: '70%' }}></div>
            </footer>
          </div>

          <div className="chart">
            <span>SQL and MongoDB</span>
            <footer>
              <div data-width="75%" style={{ width: '75%' }}></div>
            </footer>
          </div>

          <div className="chart">
            <span>C#</span>
            <footer>
              <div data-width="75%" style={{ width: '75%' }}></div>
            </footer>
          </div>

          <div className="chart">
            <span>Node.js</span>
            <footer>
              <div data-width="75%" style={{ width: '75%' }}></div>
            </footer>
          </div>

        </div>
        <div className="lowBanner">
          <WorldOfWords />
        </div>
      </div>
    </div>

  )
}

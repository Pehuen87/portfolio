import WorldOfWords from "./WorldOfWords"
import "./page.css"


export const MySkills = () => {
  return (
    <div className="page">
      <div className="title">My Skills</div>
      <span className="text">
        <p>I’ve been working as a developer since 2011, in the beginning I made IT solutions using C# and SQL while I was studying Systems Engineering at UTN.</p>
        <p>In the last 5 years I’ve been working as a Freelance Front-End Developer, doing remote work, providing advise and collaborating in small work teams. This allowed me to meet talented people with whom I shared the greatest experiences.</p>
        <p>My goal as a Web Developer is to make solutions that will adapt to every user requirement, with dinamic UI and responsive design. To achive that I apply my knowledge about several technologies, such as HTML, CSS, JavaScript, SASS, LESS and React.</p>
        <p>My main interest is to work in a collaborative team that leads to a constant learning, and collective and personal improvement.</p>
      </span>
      <div className="rightBanner"><WorldOfWords /></div>
    </div>

  )
}

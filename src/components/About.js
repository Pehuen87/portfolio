
import "./page.css"


export const About = () => {
  return (
    <div className="page">
      <div className="textContainer">
        <span>Hi, I'm Pehuen, a Web Developer...</span>
        <p> ...located in Buenos Aires, Argentina. I'm a curious person, always serching for experiences that allow me to learn new things.</p>
        <p>I see myself as a practical person, willing to share different points of view and activities with pairs and generate a collaborative and comfortable work environment. </p>
        <p> I like to walk in the park and ride my bike or my longboard with friends. I have two cats and I'm huge fan of coop video games and a tattoo enthusiast</p>
      </div>
      <div class="mapouter banner">
        <div class="gmap_canvas">
          <iframe width="100%" height="500" title="iframe1" id="gmap_canvas" src={"https://maps.google.com/maps?q=buenos%20aires&t=&z=7&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
    </div>

  )
}

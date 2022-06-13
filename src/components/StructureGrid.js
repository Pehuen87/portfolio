import './structureGrid.css'

export const StructureGrid = () => {
  return (
    <div className='containerGrid'>
      <div className='navBarGrid'>
      
          <span className='navItem'><a href="#">My Work</a></span>
          <span className='navItem'><a href="#">My Skills</a></span>
          <span className='navItem'>
            <span className="logo logoBorder">PEHUEN</span>
            <span className="logo logoResp"> ASSALONE</span>
          </span>
          <span className='navItem'><a href="#">About Me</a></span>
          <span className='navItem'><a href="#" className="contact">Contact</a></span>
      </div>

    </div>
  )
}

export default StructureGrid;

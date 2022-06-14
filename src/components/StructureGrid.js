import './structureGrid.css'

export const StructureGrid = () => {
  return (
    <div className='containerGrid'>
      <div className='navBarGrid'>

        <span className='navItem navMenu'><a href="#" className='menu'> &#9776;</a></span>
        <span className='navItem'><a href="#">My Work</a></span>
        <span className='navItem'><a href="#">My Skills</a></span>
        <span className='navItem logo'>
          <span className="logoBorder">PEHUEN</span>
          <span className="logoResp"> ASSALONE</span>
        </span>
        <span className='navItem'><a href="#">About Me</a></span>
        <span className='navItem'><a href="#">Contact</a></span>

      </div>

    </div>
  )
}

export default StructureGrid;


import './moon.css'
import moonSvg from './img/moon.svg'

export const Moon = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' >
            
            
            
            <img src= {moonSvg} className='moon1'/>
            
            
            <div className='sky-color'></div>
            
        </div>
    )
}

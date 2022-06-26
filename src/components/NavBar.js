import {
    Link,
    NavLink
} from 'react-router-dom'


export const NavBar = () => {
    return (
        <>
            <input className="ch_hamb" type="checkbox" id="side-menu" />
            <div className='itemResp'><NavLink to="./my-work">My Work</NavLink></div>
            <div className='itemResp'><NavLink to="./my-skills">My Skills</NavLink></div>

            <div className='logoNavBar'>
                <label className="hamb" for="side-menu">
                    <pre className="symbol"> </pre>
                </label>
                <div className="logo">
                    <span className="logoBorder" data-text="<PEHUEN&nbsp;ASSALONE&nbsp;&#47;&#62;">&#60;PEHUEN&nbsp;ASSALONE&nbsp;&#47;&#62;</span>
                    {/* <span data-text="ASSALONE" className="itemResp"> ASSALONE</span> */}
                </div>
            </div>

            <div className='itemResp'><NavLink to="./about">About Me</NavLink></div>
            <div className='itemResp'><NavLink to="./contact">Contact</NavLink></div>
        </>
    )
}
export default NavBar;
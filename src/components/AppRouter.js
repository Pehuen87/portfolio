import React from 'react'
/**/
import imagen from './img/a.jpg'
import imagen2 from './img/b.jpg'
import imagen3 from './img/c.jpg'

/* */
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom'


import { NavBar } from './NavBar'
import { Contact } from './Contact'
import { MySkills } from './MySkills'
import { HomeScreen } from './HomeScreen'
import { MyWork } from './MyWork'
import { About } from './About'








export const AppRouter = () => {


    const goToTop = () => {
        document.getElementById('scroller').scrollTo({
            top: 800,
            behavior: 'smooth',
        });
    };



    return (
        <Router>
            <div className='containerGrid'>
                <div className="navBar"><NavBar /></div>


                <section id='scroller' className='slider disableScrollbar'>
                    <div className='section'></div>
                    <img src={imagen2}></img>
                    <div className='section'></div>
                    <img src={imagen}></img>
                    <div className='section'></div>
                    <img src={imagen3}></img>
                    <div className='section'></div>
                    <img src={imagen}></img>
                    <div className='section'></div>
                    <img src={imagen2}></img>
                    <div className='section'></div>
                    <img src={imagen3}></img>
                    <div className='section'></div>
                </section>
                <div className='footer'>
                    <button
                        className="scroll-top-btn"
                        onClick={goToTop}>Scroll Top</button>
                    
                </div>



                {/* <div className='cont'>
                    <Routes>
                        <Route exact path='/' element={<HomeScreen />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/my-skills' element={<MySkills />} />
                        <Route path='/my-work' element={<MyWork />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/*' element={<h1>Error 404</h1>} />
                    </Routes>
                </div> */}
            </div>
        </Router>

    )
}  

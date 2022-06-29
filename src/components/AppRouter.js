import React from 'react'

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


/* todo */
import moonSvg from './img/moon.svg'






export const AppRouter = () => {




    return (
        <Router>
            <div className='containerGrid'>
                <div className="navBar"><NavBar /></div>


                <section id='scroller' className='slider disableScrollbar'>
                    <div className='pageContainer'>
                        <Routes>
                            <Route exact path='/' element={<HomeScreen />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/my-skills' element={<MySkills />} />
                            <Route path='/my-work' element={<MyWork />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/*' element={<h1>Error 404</h1>} />
                        </Routes>
                        <img src= {moonSvg} className='moon1' alt=''/>
                    </div>
                </section>
            </div>
        </Router>

    )
}  

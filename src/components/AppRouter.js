import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'


import { NavBar } from './NavBar'
import { Contact } from './Contact'
import { MySkills } from './MySkills'
import { HomeScreen } from './HomeScreen'
import { MyWork } from './MyWork'
import { About } from './About'







export const AppRouter = () => {




    return (
        <Router>
            <div className='containerGrid'>
                <div className="navBar"><NavBar /></div>


                    <div className='pageContainer'>
                        <Routes>
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/my-skills' element={<MySkills />} />
                            <Route path='/my-work' element={<MyWork />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/*' element={<HomeScreen />} />
                            {/* <Route path='/*' element={<h1>Error 404</h1>} /> */}
                        </Routes>
                    </div>
            </div>
        </Router>

    )
}  

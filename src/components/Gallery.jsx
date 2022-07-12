import React from 'react'
import { useState } from 'react';

import './gallery.css'
import IMGA from './img/a.jpg'




export const Gallery = () => {
    const [divState, setDivState] = useState(0);





    return (
        <div className='galleryContainer disableScrollbar'>
            <div data-text="Work 1" className={ (divState===1 ? 'floatingDiv' : '')} onClick={() => setDivState(1)}>
            <img src={IMGA} alt="" />
            </div><div data-text="Work 2"className={ (divState===2 ? 'floatingDiv' : '')} onClick={() => setDivState(2)}>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            </div><div data-text="Work 3"className={ (divState===3 ? 'floatingDiv' : '')} onClick={() => setDivState(3)}>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
            </div><div data-text="Work 4"className={ (divState===4 ? 'floatingDiv' : '')} onClick={() => setDivState(4)}>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
            </div><div data-text="Work 5" className={ (divState===5 ? 'floatingDiv' : '')} onClick={() => setDivState(5)}>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
            </div><div data-text="Work 6" className={ (divState===6 ? 'floatingDiv' : '')} onClick={() => setDivState(6)}>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
            </div><div data-text="Work 7" className={ (divState===7 ? 'floatingDiv' : '')} onClick={() => setDivState(7)}>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            </div><div data-text="Work 8" className={ (divState===8 ? 'floatingDiv' : '')} onClick={() => setDivState(8)}>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            </div>
        </div>
    )
}

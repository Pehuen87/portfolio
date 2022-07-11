import React from 'react'
import './gallery.css'




export const Gallery = () => {

    return (
        <div className='galleryContainer disableScrollbar'>
            <div id='hola' data-text="Work 1" onClick={(event)=>{console.log(event.target.id)}}>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            </div><div data-text="Work 2">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
            </div><div data-text="Work 3">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            </div><div data-text="Work 4">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
            </div><div data-text="Work 5">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
            </div><div data-text="Work 6">
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
            </div><div data-text="Work 7">
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
            </div><div data-text="Work 8">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            </div>
        </div>
    )
}

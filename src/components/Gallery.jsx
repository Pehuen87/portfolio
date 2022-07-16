import React from 'react'
import { useState } from 'react';

import './gallery.css'
import ImgMelang1 from './img/melang.gif'


export const Gallery = () => {
    const [divState, setDivState] = useState(1);





    const [imgDisplayState, setimgDisplayState] = useState(0);

    let MelangImgs = ["https://swiperjs.com/demos/images/nature-2.jpg", "https://swiperjs.com/demos/images/nature-6.jpg", "https://swiperjs.com/demos/images/nature-7.jpg"];

    const nextImg = (i) => {
        if (imgDisplayState >= i - 1) {
            setimgDisplayState(0);
        } else {
            setimgDisplayState(imgDisplayState + 1);
        }
        console.log(imgDisplayState);
    }

    const prevImg = (i) => {
        if (imgDisplayState > 0) {
            setimgDisplayState(imgDisplayState - 1);
        } else {
            setimgDisplayState(i-1);
        }
        
    }




    return (
        <div className='galleryContainer disableScrollbar'>
            <div data-text="Work 1" className={(divState === 1 ? 'bigOne' : 'smallOnes')} onClick={() => setDivState(1)}>
                <img src={ImgMelang1} alt="" />
                <span></span>
            </div>
            <div data-text="Work 4"
                className={(divState === 4 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(4)}>

                <div className='arrow backward'
                    onClick={() => prevImg(MelangImgs.length)}>
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(MelangImgs.length)}>
                </div>
                <img src={MelangImgs[imgDisplayState]} alt="" />
                <span></span>
            </div><div data-text="Work 5" className={(divState === 5 ? 'bigOne' : 'smallOnes')} onClick={() => setDivState(5)}>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
                <span></span>
            </div><div data-text="Work 6" className={(divState === 6 ? 'bigOne' : 'smallOnes')} onClick={() => setDivState(6)}>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
                <span></span>
            </div><div data-text="Work 7" className={(divState === 7 ? 'bigOne' : 'smallOnes')} onClick={() => setDivState(7)}>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                <span></span>
            </div><div data-text="Work 8" className={(divState === 8 ? 'bigOne' : 'smallOnes')} onClick={() => setDivState(8)}>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                <span></span>
            </div><div data-text="Work 9" className={(divState === 9 ? 'bigOne' : 'smallOnes')} onClick={() => setDivState(9)}>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
                <span></span>
            </div>
        </div>
    )
}

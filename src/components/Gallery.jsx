import React from 'react'
import { useState } from 'react';
import './gallery.css'


export const Gallery = () => {
    const [divState, setDivState] = useState(1);



    const [imgDisplayState, setimgDisplayState] = useState(0);

    let work1Imgs = ["https://picsum.photos/id/1/800/800", "https://picsum.photos/id/2/800/800", "https://picsum.photos/id/3/800/800"];
    let work2Imgs = ["https://picsum.photos/id/4/800/800", "https://picsum.photos/id/5/800/800", "https://picsum.photos/id/6/800/800"];
    let work3Imgs = ["https://picsum.photos/id/10/800/800", "https://picsum.photos/id/11/800/800", "https://picsum.photos/id/12/800/800"];
    let work4Imgs = ["https://picsum.photos/id/13/800/800", "https://picsum.photos/id/14/800/800", "https://picsum.photos/id/15/800/800"];
    let work5Imgs = ["https://picsum.photos/id/16/800/800", "https://picsum.photos/id/17/800/800", "https://picsum.photos/id/18/800/800"];
    let work6Imgs = ["https://picsum.photos/id/19/800/800", "https://picsum.photos/id/20/800/800", "https://picsum.photos/id/21/800/800"];
    let work7Imgs = ["https://picsum.photos/id/22/800/800", "https://picsum.photos/id/23/800/800", "https://picsum.photos/id/24/800/800"];
  




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
            setimgDisplayState(i - 1);
        }

    }




    return (
        <div className='galleryContainer disableScrollbar'>
            {/* START WORK 1 */}

            <div data-text="Work 1" className={(divState === 1 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(1)}>

                <div className='arrow backward'
                    onClick={() => prevImg(work1Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work1Imgs.length)}>&#62;&#62;
                </div>
                <img src={work1Imgs[(divState === 1 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
            {/* START WORK 2 */}
            <div data-text="Work 2"
                className={(divState === 2 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(2)}>
                <div className='arrow backward'
                    onClick={() => prevImg(work2Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work2Imgs.length)}>&#62;&#62;
                </div>
                <img src={work2Imgs[(divState === 2 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
            {/* START WORK 3 */}
            <div data-text="Work 3"
                className={(divState === 3 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(3)}>
                <div className='arrow backward'
                    onClick={() => prevImg(work3Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work3Imgs.length)}>&#62;&#62;
                </div>
                <img src={work3Imgs[(divState === 3 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
            {/* START WORK 4 */}
            <div data-text="Work 4" className={(divState === 4 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(4)}>
                <div className='arrow backward'
                    onClick={() => prevImg(work4Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work4Imgs.length)}>&#62;&#62;
                </div>
                <img src={work4Imgs[(divState === 4 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
            {/* START WORK 5 */}
            <div data-text="Work 5" className={(divState === 5 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(5)}>
                <div className='arrow backward'
                    onClick={() => prevImg(work5Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work5Imgs.length)}>&#62;&#62;
                </div>
                <img src={work5Imgs[(divState === 5 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
            {/* START WORK 6 */}
            <div data-text="Work 6" className={(divState === 6 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(6)}>
                <div className='arrow backward'
                    onClick={() => prevImg(work6Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work6Imgs.length)}>&#62;&#62;
                </div>
                <img src={work6Imgs[(divState === 6 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
            {/* START WORK 7 */}
            <div data-text="Work 7" className={(divState === 7 ? 'bigOne' : 'smallOnes')}
                onClick={() => setDivState(7)}>
                <div className='arrow backward'
                    onClick={() => prevImg(work7Imgs.length)}>&#60;&#60;
                </div>
                <div className=' arrow forward'
                    onClick={() => nextImg(work7Imgs.length)}>&#62;&#62;
                </div>
                <img src={work7Imgs[(divState === 7 ? imgDisplayState : 0)]} alt="" />
                <span></span>
            </div>
        </div>
    )
}

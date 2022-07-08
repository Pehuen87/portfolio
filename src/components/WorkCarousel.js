
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Imga from "./img/a.jpg"
import Imgb from "./img/b.jpg"
import Imgc from "./img/c.jpg"
import Imgv from "./img/v.jpg"

export const WorkCarousel= () => {

  return (
        <Carousel showArrows={true}>
          <div>
            <img src={Imga}/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Imgb} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={Imgc} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={Imgv} />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>
  )
}

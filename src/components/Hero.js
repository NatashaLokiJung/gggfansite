/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import poetwo from "../img/poetwo.jpg";

const Hero = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            interval={8000}
            infiniteLoop={true}
            autoPlay={true}
            showArrows={false}
        >
            <div>
                <img src={poetwo} alt="hero" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={poetwo} alt="hero" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={poetwo} alt="hero" />
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
    );
};

export default Hero;

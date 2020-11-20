import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import izaro from "../img/leagues/izaro.jpg";
import heist from "../img/leagues/heist.jpg";
import legion from "../img/leagues/legion.jpg";
import harvest from "../img/leagues/harvest.jpg";
import blight from "../img/leagues/blight.jpg";
import betrayal from "../img/leagues/betrayal.jpg";
import delirium from "../img/leagues/delirium.jpg";
import delve from "../img/leagues/delve.jpg";
import sirus from "../img/leagues/sirus.jpg";
import kitava from "../img/leagues/kitava.jpg";
import shaperelder from "../img/leagues/shaperelder.jpg";

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
                <img src={kitava} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={izaro} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={heist} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={legion} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={blight} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={harvest} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={betrayal} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={delve} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={delirium} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>

            <div>
                <img src={sirus} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={shaperelder} alt="hero" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
        </Carousel>
    );
};

export default Hero;

import { Parallax } from "react-parallax";
import scrollImg from "../img/bannerlarge.jpg";

const ParralaxImg = () => {
    // const insideStyles = {
    //     background: "white",
    //     padding: 20,
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%,-50%)",
    // };
    return (
        <Parallax bgImage={scrollImg} strength={500}>
            <div style={{ height: 300 }}>
                {/* <div style={insideStyles}>HTML inside the parallax</div> */}
            </div>
        </Parallax>
    );
};

export default ParralaxImg;

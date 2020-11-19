import { Parallax } from "react-parallax";
import scrollImg from "../img/bannerlarge.jpg";

const ParralaxImg = () => {
    return (
        <Parallax bgImage={scrollImg} strength={500}>
            <div style={{ height: 300 }}></div>
        </Parallax>
    );
};

export default ParralaxImg;

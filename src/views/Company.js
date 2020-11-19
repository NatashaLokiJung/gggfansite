/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

import { Parallax } from "react-parallax";
import scrollImg from "../img/bannerlarge.jpg";

const Company = () => {
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding);
    `;
    return (
        <div>
            <h1>Grinding Gear Games</h1>
            <div css={txtarea}>
                <p>
                    Grinding Gear Games was founded in November 2006 in
                    Auckland, New Zealand. Its founding members come from
                    various countries and have a selection of diverse
                    backgrounds ranging from artificial intelligence and
                    software security to industrial design to professional
                    tournament game play.
                </p>
            </div>
            <Parallax bgImage={scrollImg} strength={500}>
                <div style={{ height: 300 }}></div>
            </Parallax>
            <div css={txtarea}>
                <p>
                    We are currently developing Path of Exile, a competitive
                    online action RPG. Much more information about this project
                    is available at www.pathofexile.com
                </p>
                <p>
                    As veterans of various online role playing games, we
                    understand what is required to make an addictive action RPG
                    with visceral combat and a complex item economy.
                </p>
            </div>
        </div>
    );
};

export default Company;

/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Parallax } from "react-parallax";
import poetwo from "../img/poetwo.jpg";

const PoETwo = () => {
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding); ;
    `;
    const videoPlayer = css`
        display: flex;
        justify-content: center;
    `;
    return (
        <div>
            <h1>Path of Exile 2</h1>
            <div css={txtarea}>
                <p>
                    Path of Exile 2 is a new seven-act storyline that is
                    available alongside the original Path of Exile 1 campaign.
                    Both the old and new storyline lead to the same shared Atlas
                    endgame. Path of Exile 2 retains all expansion content that
                    has been created over the last six years and introduces a
                    new skill system, ascendancy classes, engine improvements
                    and more.
                </p>
            </div>
            <div css={videoPlayer}>
                <iframe
                    title="poetwotrailer"
                    width="960"
                    height="450"
                    src="https://www.youtube.com/embed/9OosC1E8TVM"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div css={txtarea}></div>

            <Parallax bgImage={poetwo} strength={500}>
                <div style={{ height: 300 }}></div>
            </Parallax>

            <div css={txtarea}>
                <p>
                    Path of Exile 2 was revealed at ExileCon in November 2019.
                    In the video below, Jonathan from GGG plays 14 minutes of
                    the first act of the new campaign, voiced over by Chris
                    Wilson, explaining some of the changes and improvements.
                </p>
            </div>
            <div css={videoPlayer}>
                <iframe
                    title="poetwogameplay"
                    width="960"
                    height="450"
                    src="https://www.youtube.com/embed/V2VRRSVgCL4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default PoETwo;

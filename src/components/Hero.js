/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import poetwo from "../img/poetwo.jpg";

const Hero = () => {
    const styleHero = css`
        width: 100%;
    `;
    const styleHeroImg = css`
        width: 100%;
    `;
    return (
        <div css={styleHero}>
            <img src={poetwo} alt="hero" css={styleHeroImg} />
        </div>
    );
};

export default Hero;

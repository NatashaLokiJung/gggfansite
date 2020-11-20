/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Leagues = ({ img, alt }) => {
    const wrapperBox = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const wrapperImg = css`
        max-width: 200px;
    `;
    return (
        <div css={wrapperBox}>
            <img src={img} alt={alt} css={wrapperImg} />
        </div>
    );
};

export default Leagues;

/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Leagues = ({ img, alt }) => {
    const wrapper = css`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    `;

    const wrapperBox = css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #444;
        color: #fff;
        border-radius: 5px;
    `;

    const wrapperImg = css`
        max-width: 200px;
    `;
    return (
        <div css={wrapper}>
            <div css={wrapperBox}>
                <img src={img} alt={alt} css={wrapperImg} />
            </div>
        </div>
    );
};

export default Leagues;

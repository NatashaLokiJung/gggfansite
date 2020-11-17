/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Footer = () => {
    const styleFooter = css`
        display: flex;
        justify-content: center;
    `;
    return (
        <div css={styleFooter}>
            <p>© 2006 - 2020 Grinding Gear Games</p>
        </div>
    );
};

export default Footer;

/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Footer = () => {
    const footerContainer = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px;
    `;

    const footerBoxWrapper = css`
        display: flex;
        justify-content: space-between;
    `;

    const footerBox = css`
        display: flex;
        flex-direction: column;
        padding: 20px;
    `;

    const credits = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    `;

    return (
        <div css={footerContainer}>
            <div css={footerBoxWrapper}>
                <div css={footerBox}>
                    Contact
                    <p>General Email: contact@grindinggear.com</p>
                    <p>Press Email: media@grindinggear.com</p>
                    <p>
                        Phone: +64 9 551 3935 (09 551 3935 inside New Zealand)
                    </p>
                </div>
                <div css={footerBox}>Avaliable jobs:</div>
                <div css={footerBox}>Follow us on social:</div>
            </div>
            <div css={credits}>
                <p>© 2006 - 2020 Grinding Gear Games</p>
                Terms of Service · Privacy Policy · Security · Cookies Policy
            </div>
        </div>
    );
};

export default Footer;

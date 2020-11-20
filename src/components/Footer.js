/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import logodark from "../img/gggdark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Footer = () => {
    const footerContainer = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px 0;
        margin: 0 auto;
    `;

    const footerBoxWrapper = css`
        display: flex;
        justify-content: space-between;

        @media (max-width: 940px) {
            flex-direction: column;
        }
    `;

    const footerBox = css`
        display: flex;
        flex-direction: column;
        margin: 40px;
        width: 280px;
    `;

    const socialIcons = css`
        display: flex;
        justify-content: space-between;
        font-size: 30px;
    `;

    const socialIconLink = css`
        color: #a38d6d;
        &:hover {
            color: white;
            transition: 1s;
        }
    `;

    const credits = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    `;

    const footerLink = css`
        display: flex;
        justify-content: space-between;
        @media (max-width: 940px) {
            flex-direction: column;
        }
    `;

    const footerLinks = css`
        padding: 20px;
        display: flex;
        font-size: 13px;

        color: #a38d6d;
        &:hover {
            color: white;
            transition: 1s;
        }
    `;

    const logoDark = css`
        padding: 50px 10px;
    `;

    return (
        <div css={footerContainer}>
            <hr></hr>
            <div css={footerBoxWrapper}>
                <div css={footerBox}>
                    <h3>Contact</h3>
                    <p>General Email: contact@grindinggear.com</p>
                    <p>Press Email: media@grindinggear.com</p>
                    <p>
                        Phone: +64 9 551 3935 (09 551 3935 inside New Zealand)
                    </p>
                </div>
                <div css={footerBox}>
                    <h3>Follow Us</h3>
                    <div css={socialIcons}>
                        <a
                            css={socialIconLink}
                            href="https://twitter.com/pathofexile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </a>
                        <a
                            css={socialIconLink}
                            href="https://www.youtube.com/user/grindinggear"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={["fab", "youtube"]} />
                        </a>
                        <a
                            css={socialIconLink}
                            href="https://www.facebook.com/pathofexile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={["fab", "facebook"]} />
                        </a>
                        <a
                            css={socialIconLink}
                            href="https://www.reddit.com/r/pathofexile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
                        </a>
                    </div>
                </div>
            </div>
            <div css={credits}>
                <img src={logodark} alt="logo" css={logoDark} />
                <p>© 2006 - 2020 Grinding Gear Games</p>
                <div css={footerLink}>
                    <a
                        href="https://www.pathofexile.com/legal/terms-of-use-and-privacy-policy"
                        css={footerLinks}
                    >
                        Terms of Use
                    </a>
                    <a
                        href="https://www.pathofexile.com/legal/terms-of-use-and-privacy-policy"
                        css={footerLinks}
                    >
                        Privacy Notice
                    </a>
                    <a
                        href="https://www.pathofexile.com/legal/terms-of-use-and-privacy-policy"
                        css={footerLinks}
                    >
                        Cookies Notice
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

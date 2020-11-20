/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import GGG from "../img/ggglogo.png";
import { useState } from "react";
import Burger from "../components/Burger";

const Nav = () => {
    const [open, setOpen] = useState(false);

    const styleNav = css`
        padding: 10px;
        display: flex;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        background: hsla(360, 100%, 0%, 0.7);
        z-index: 10;

        & .links {
            display: flex;
            justify-content: space-between;
            text-align: center;
            padding: 15px;
        }

        @media (max-width: 940px) {
            & .links {
                ${open ? "display:flex;" : "display:none;"}
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
            & img {
                display: none;
            }
        }
    `;

    const navLink = css`
        padding: 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-bottom: 1px solid #a38d6d;
        color: #a38d6d;
        &:hover {
            color: white;
            transition: 1s;
        }
    `;

    const logo = css`
        height: 60px;
        position: fixed;
        left: 16px;
        top: 14px;
        z-index: 10;
    `;
    return (
        <div>
            <div css={styleNav}>
                <Burger open={open} setOpen={setOpen} />
                <div className="links">
                    <img src={GGG} alt="logo" css={logo} />
                    <Link to="/" css={navLink}>
                        Home
                    </Link>
                    <Link to="/company" css={navLink}>
                        Company
                    </Link>
                    <Link to="/poe" css={navLink}>
                        Path of Exile
                    </Link>
                    <Link to="/poetwo" css={navLink}>
                        Path of Exile 2
                    </Link>
                    <Link to="/poemobile" css={navLink}>
                        Path of Exile Mobile
                    </Link>
                    <Link to="/careers" css={navLink}>
                        Careers
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;

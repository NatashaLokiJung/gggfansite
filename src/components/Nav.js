/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import GGG from "../img/ggglogo.png";
import { useState } from "react";
import Burger from "../components/Burger";

const Nav = () => {
    const [open, setOpen] = useState(false);

    // if (open === true)
    const styleNav = css`
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: hsla(360, 100%, 0%, 0.7);
        z-index: 10;

        & .links {
            display: flex;
        }

        @media (max-width: 940px) {
            & .links {
                ${open ? "display:flex;" : "display:none;"}
                flex-direction: column;
            }
        }
    `;

    // const styleBurgerNav = css`
    //     padding: 10px;
    //     display: flex;
    //     /* justify-content: space-between; */
    //     align-items: center;
    //     /* flex-direction: column; */
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     background: hsla(360, 100%, 0%, 0.7);
    //     z-index: 10;
    //     @media (min-width: 940px) {
    //         display: none;
    //         flex-direction: column;
    //     }
    // `;

    const logo = css`
        height: 60px;
    `;
    return (
        <div>
            <div css={styleNav}>
                <Burger open={open} setOpen={setOpen} />
                <div className="links">
                    <img src={GGG} alt="logo" css={logo} />
                    <Link to="/">Home</Link>
                    <Link to="/company">Company</Link>
                    <Link to="/poe">Path of Exile</Link>
                    <Link to="/poetwo">Path of Exile 2</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            {/* <div css={styleBurgerNav}>
                <Burger open={open} setOpen={setOpen}>
                <Link to="/">Home</Link>
                <Link to="/company">Company</Link>
                <Link to="/poe">Path of Exile</Link>
                <Link to="/poetwo">Path of Exile 2</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
                </Burger>
            </div> */}
        </div>
    );
};

export default Nav;

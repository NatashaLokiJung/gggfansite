/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

const Burger = ({ open, setOpen }) => {
    const styledBurger = css`
        left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        color: white;

        &:focus {
            outline: none;
        }
    `;

    const burgerIcon = css`
        position: absolute;
        top: 1.1rem;
        left: 2rem;
        color: #a38d6d;
    `;
    return (
        <div css={styledBurger} open={open} onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={["fas", "bars"]} css={burgerIcon} />
        </div>
    );
};

export default Burger;

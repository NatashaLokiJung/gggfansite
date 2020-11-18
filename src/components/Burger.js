/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import React from "react";

const Burger = ({ open, setOpen }) => {
    const styledBurger = css`
        top: 30%;
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
        background: red;

        &:focus {
            outline: none;
        }
    `;
    return (
        <div css={styledBurger} open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default Burger;

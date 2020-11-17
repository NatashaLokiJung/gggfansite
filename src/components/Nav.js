/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";

const Nav = () => {
    const styleNav = css`
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    `;
    return (
        <div css={styleNav}>
            <Link to="/">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/poe">Path of Exile</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Nav;

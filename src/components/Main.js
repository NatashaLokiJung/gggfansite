/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Router } from "@reach/router";
import Careers from "../views/Careers";
import Company from "../views/Company";
import Contact from "../views/Contact";
import Home from "../views/Home";
import PoE from "../views/PoE";

const Main = () => {
    return (
        <div>
            <Router>
                <Home path="/" />
                <Company path="/company" />
                <PoE path="/poe" />
                <Careers path="/careers" />
                <Contact path="/contact" />
            </Router>
        </div>
    );
};

export default Main;

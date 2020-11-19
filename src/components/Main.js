/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Router } from "@reach/router";
import Careers from "../views/Careers";
import Company from "../views/Company";
import Home from "../views/Home";
import PoE from "../views/PoE";
import PoETwo from "../views/PoETwo";
import PoEMobile from "../views/PoEMobile";

const Main = () => {
    return (
        <div>
            <Router>
                <Home path="/" />
                <Company path="/company" />
                <PoE path="/poe" />
                <PoETwo path="/poetwo" />
                <PoEMobile path="/poemobile" />
                <Careers path="/careers" />
            </Router>
        </div>
    );
};

export default Main;

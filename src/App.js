/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
    const styleApp = css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        @media (max-width: 940px) {
            padding-top: 50px;
        }
    `;

    return (
        <div css={styleApp}>
            <Hero />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

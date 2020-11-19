/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
// import NewsFeed from "../components/News";

const Home = () => {
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding);
    `;
    return (
        <div>
            <h1>Welcome</h1>
            <div css={txtarea}>
                <p>
                    This site is fanmade by Natasha "Natilo" Jung, a 2nd year
                    frontend web developer student. All the text, images and
                    videos showcased on this site are thus NOT MY OWN and I
                    claim no ownership over it. Everything belongs to GGG.
                </p>
                <p>
                    My goal with this site was to improve my skills in ReactJS,
                    while also attempting to bring GGG's official website into
                    the year 2020. NO offence at all to whoever made the
                    original one, but I really think it could do with an update.
                </p>
                <p>
                    For my fellow nerds, I can reveal that I've used ReactJS,
                    emotion/core and several NPM packages, like
                    react-responsive-carrousel, react-parallax and
                    react-image-gallery. The icons are from FontAwesome and I've
                    coded everything in VS Code.
                </p>

                <p>
                    So stay awhile, look around and always remember to stay
                    sane, Exile.<br></br>
                </p>

                <p>
                    Kind regards,<br></br>
                    Natasha<br></br>
                    November 20th, 2020.
                </p>
            </div>
        </div>
    );
};

export default Home;

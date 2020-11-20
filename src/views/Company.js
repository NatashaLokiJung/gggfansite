/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import ImageGallery from "react-image-gallery";

import { Parallax } from "react-parallax";
import scrollImg from "../img/bannerlarge.jpg";

const Company = () => {
    const galleryContainer = css`
        max-width: 900px;
        padding: 20px;
        margin: 0 auto;
    `;
    const images = [
        {
            original: "/img/office/TheEntrance.jpg",
            thumbnail: "/img/office/TheEntrance_thumb.jpg",
        },
        {
            original: "/img/office/Kitchen.jpg",
            thumbnail: "/img/office/Kitchen_thumb.jpg",
        },
        {
            original: "/img/office/GuildStash.jpg",
            thumbnail: "/img/office/GuildStash_thumb.jpg",
        },
        {
            original: "/img/office/Support.jpg",
            thumbnail: "/img/office/Support_thumb.jpg",
        },
        {
            original: "/img/office/Space.jpg",
            thumbnail: "/img/office/Space_thumb.jpg",
        },
        {
            original: "/img/office/RecRoom.jpg",
            thumbnail: "/img/office/RecRoom_thumb.jpg",
        },
        {
            original: "/img/office/Office.jpg",
            thumbnail: "/img/office/Office_thumb.jpg",
        },
        {
            original: "/img/office/Office2.jpg",
            thumbnail: "/img/office/Office2_thumb.jpg",
        },
        {
            original: "/img/office/Conference.jpg",
            thumbnail: "/img/office/Conference_thumb.jpg",
        },
        {
            original: "/img/office/Level8.jpg",
            thumbnail: "/img/office/Level8_thumb.jpg",
        },
    ];
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding);
    `;
    return (
        <div>
            <h1>Grinding Gear Games</h1>
            <div css={txtarea}>
                <p>
                    Grinding Gear Games was founded in November 2006 in
                    Auckland, New Zealand. Its founding members come from
                    various countries and have a selection of diverse
                    backgrounds ranging from artificial intelligence and
                    software security to industrial design to professional
                    tournament game play.
                </p>
            </div>
            <Parallax bgImage={scrollImg} strength={500}>
                <div style={{ height: 300 }}></div>
            </Parallax>
            <div css={txtarea}>
                <p>
                    We are currently developing Path of Exile, a competitive
                    online action RPG. Much more information about this project
                    is available at www.pathofexile.com
                </p>
                <p>
                    As veterans of various online role playing games, we
                    understand what is required to make an addictive action RPG
                    with visceral combat and a complex item economy.
                </p>
            </div>
            <hr></hr>
            <h1> The office in Auckland, New Zealand</h1>
            <div css={galleryContainer}>
                <ImageGallery items={images} />
            </div>
        </div>
    );
};

export default Company;

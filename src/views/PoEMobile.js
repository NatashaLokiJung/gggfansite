/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import ImageGallery from "react-image-gallery";

const PoEMobile = () => {
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding);
    `;
    const galleryContainer = css`
        max-width: 900px;
        padding: 20px;
        margin: 0 auto;
    `;
    const images = [
        {
            original: "/img/mobile/Screenshot1.jpg",
            thumbnail: "/img/mobile/Screenshot1_thumb.jpg",
        },
        {
            original: "/img/mobile/Screenshot2.jpg",
            thumbnail: "/img/mobile/Screenshot2_thumb.jpg",
        },
        {
            original: "/img/mobile/Screenshot3.jpg",
            thumbnail: "/img/mobile/Screenshot3_thumb.jpg",
        },
    ];
    const videoPlayer = css`
        display: flex;
        justify-content: center;
        padding: 30px 0;
    `;
    return (
        <div>
            <h1>Path of Exile Mobile</h1>
            <div css={txtarea}>
                <p>
                    We're working on an experimental version of Path of Exile
                    for mobile devices. Path of Exile's Atlas Map system is
                    actually perfect for bite-sized action gameplay. This is a
                    complete Path of Exile game experience with no pay-to-win
                    elements and is being developed in-house at Grinding Gear
                    Games.
                </p>
            </div>
            <div css={videoPlayer}>
                <iframe
                    title="poemobiletrailer"
                    width="960"
                    height="450"
                    src="https://www.youtube.com/embed/f_YjBTYHhug"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div css={galleryContainer}>
                <ImageGallery items={images} />
            </div>
        </div>
    );
};

export default PoEMobile;

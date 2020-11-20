/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Careers = () => {
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding);
    `;
    const listItems = css`
        font-size: 13px;
        line-height: 22px;
        font-weight: 400;
        padding: 10px 0;
    `;
    return (
        <div>
            <h1>Careers at GGG</h1>

            <div css={txtarea}>
                <h2>Quality Assurance Testers</h2>
                <p>
                    Grinding Gear Games is looking to hire additional Quality
                    Assurance Testers to work in our office in Auckland, New
                    Zealand. While we'd love to find a way to accept worldwide
                    applicants, the current situation means that we cannot.
                    Please only apply if you currently reside in New Zealand and
                    are either a New Zealand Citizen or Resident.
                </p>
                <p>
                    <h4>This role involves:</h4>
                </p>
                <ul>
                    <li css={listItems}>
                        Testing new Path of Exile content and features to find
                        problems.
                    </li>
                    <li css={listItems}>
                        Communicating these problems to the development team
                        through our issue tracking software.
                    </li>
                    <li css={listItems}>
                        Following up on the state of these problems and working
                        with developers to resolve them.
                    </li>
                    <li css={listItems}>
                        Checking candidate builds of content updates and patches
                        for problems by going through checklists.
                    </li>
                    <li css={listItems}>
                        Scripting automated test-cases and improving our testing
                        tools.
                    </li>
                </ul>
                <p>
                    <h4>You should meet these requirements:</h4>
                </p>
                <ul>
                    <li css={listItems}>
                        A bachelor's degree in Computer Science, Software
                        Engineering, game design or an equivalent qualification.
                    </li>
                    <li css={listItems}>
                        At least three months of work experience performing
                        quality assurance for computer games, or other
                        team-based work experience.
                    </li>
                    <li css={listItems}>
                        1000 hours of experience with our game, Path of Exile.
                        Our game is extremely complicated and members of our
                        quality assurance team require vast experience with all
                        aspects of the game. While there is some training, it is
                        vital that you already fully understand the game itself
                        in order to apply for this role.
                    </li>
                </ul>
                <p>
                    <h4>It helps to meet these other requirements:</h4>
                </p>
                <ul>
                    <li css={listItems}>Have good communication skills.</li>
                    <li css={listItems}>
                        Be highly organised and hard working.
                    </li>
                    <li css={listItems}>
                        Have the ability to multitask and prioritise work when
                        required.
                    </li>
                    <li css={listItems}>
                        Have excellent computer and technical skills.
                    </li>
                    <li css={listItems}>Be seeking a long term position.</li>
                </ul>
                <p>
                    This is a full-time role in Henderson, Auckland. Please only
                    apply if you currently reside in New Zealand and are either
                    a New Zealand Citizen or Resident. The country's borders are
                    closed and we will not be assisting with applying for work
                    visas for this role. To apply for this role, please email
                    your Resume and a cover letter (introducing yourself and
                    your history with PoE) to hr@grindinggear.com
                </p>
            </div>
        </div>
    );
};

export default Careers;

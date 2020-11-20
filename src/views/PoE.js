/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Parallax } from "react-parallax";
import Leagues from "../components/Leagues";
import scrollImg from "../img/leagues/waroftheatlas.jpg";
import scrollImg2 from "../img/leagues/falloforiath.jpg";
import leagueData from "../data/leagues.json";

const PoE = () => {
    const wrapper = css`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: 0 30px 30px 30px;
    `;
    const txtarea = css`
        max-width: var(--txtwidth);
        margin: 0 auto;
        padding: var(--txtpadding);
    `;

    const leagueImgLink = css`
        &:hover {
            box-shadow: 0px 0px 20px 0px rgba(199, 199, 199, 1);
            transition: 1s;
        }
    `;

    return (
        leagueData && (
            <div>
                <h1>Path of Exile</h1>
                <div css={txtarea}>
                    <p>
                        Path of Exile is an online Action RPG set in the dark
                        fantasy world of Wraeclast. It is designed around a
                        strong online item economy, deep character
                        customisation, competitive PvP and ladder races. The
                        game is completely free and will never be "pay to win".
                    </p>
                    <h2>Skill Gem System</h2>
                    <p>
                        Action RPGs have always been about two things:
                        devastating skills and valuable items. Skills in Path of
                        Exile are items - gems that grant abilities when
                        socketed into equipment. A wide range of support gems
                        allow the behaviour of skills to be modified. You can
                        augment your Fireball to chain from enemy to enemy or
                        split into multiple flaming projectiles. Up to five
                        support gems can affect a skill at any time. Because
                        gems level up independently and some are hard to find,
                        they can be very valuable in trade.
                    </p>
                </div>
                <Parallax bgImage={scrollImg} strength={500}>
                    <div style={{ height: 300 }}></div>
                </Parallax>
                <div css={txtarea}>
                    <h2>Passive Skill Tree</h2>
                    <p>
                        All of Path of Exile's character classes share its vast
                        passive skill tree. Starting at one of seven distinct
                        locations dictated by their chosen class, players can
                        focus on the core specialities of their class or travel
                        across the tree to build complex combinations of skills
                        from various disciplines. Scattered across the tree are
                        Keystone passives that drastically alter the way a
                        character is played. Craftable Jewels allow you to
                        dynamically modify the tree itself, adding custom
                        properties or influencing the effects of nearby passive
                        skills
                    </p>

                    <h2>The World of Wraeclast</h2>
                    <p>
                        Wraeclast is a dark, brutal continent. Scarred by
                        mysterious catastrophes of the past and inhabited by
                        creatures of nightmare, the very environment challenges
                        exiles who dare explore it.
                    </p>
                    <p>
                        We're sick of the recent trend towards bright, cartoony
                        RPGs. The art style we chose for Path of Exile is dark,
                        gritty and realistic. Wraeclast is terrifying, and we've
                        tried hard to do it justice.
                    </p>
                    <p>
                        In Path of Exile, replayability is key. All world areas
                        including outdoors ones are instanced for your party and
                        randomly generated, right down to the magic properties
                        of the monsters that dwell in them and the treasure they
                        guard.
                    </p>
                </div>
                <Parallax bgImage={scrollImg2} strength={500}>
                    <div style={{ height: 300 }}></div>
                </Parallax>
                <div css={txtarea}>
                    <h2>Item System</h2>
                    <p>
                        Path of Exile is completely designed around items. Any
                        game systems that can be itemised with random properties
                        have been. Our flasks are persistent items that have
                        mods. Our end-game areas can be found as Map items that
                        have mods altering their challenges and rewards. We've
                        gone as far as removing gold as a currency and basing
                        our trade economy around orbs that can randomly reroll
                        the properties of other items. We have carefully
                        constructed our item system for veterans of the best
                        Action RPGs.
                    </p>
                    <h2>Leagues and Events</h2>
                    <p>
                        One of the things that's most fun about playing a
                        competitive online Action RPG is taking part in a
                        levelling race on a fresh server. In Path of Exile, we
                        wanted to capture this feeling without constantly
                        resetting our main economy, so we've created a set of
                        race leagues that are run frequently as separate game
                        worlds with their own ladders and economies.
                    </p>
                    <p>
                        In addition to regular races, leagues can substantially
                        modify the game rules. In an Ancestral league, ancient
                        totems exist alongside groups of monsters, augmenting
                        their abilities. In Turbo leagues, monsters move and
                        attack 60% faster than normal.
                    </p>
                </div>
                <div css={wrapper}>
                    {leagueData.data.leagues.map((league) => (
                        <a
                            href={league.link}
                            target="_blank"
                            rel="noreferrer"
                            css={leagueImgLink}
                        >
                            <Leagues img={league.img} alt={league.name} />
                        </a>
                    ))}
                </div>
            </div>
        )
    );
};

export default PoE;

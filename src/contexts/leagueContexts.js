import React, { createContext, useState, useEffect } from "react";

export const leagueContext = createContext();

const LeagueContextProvider = (props) => {
    const [leagueData, setLeagueData] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/data/leagues.json")
            .then((response) => response.json())
            .then((result) => {
                setLeagueData(result.data);
                console.log("fra context", result.data);
            });
    }, []);
    return (
        <leagueContext.Provider
            value={{
                leagueData,
                setLeagueData,
            }}
        >
            {props.children}
        </leagueContext.Provider>
    );
};

export default LeagueContextProvider;

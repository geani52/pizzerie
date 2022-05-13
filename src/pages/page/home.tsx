import React from "react";
import Carusel from "../components/carusel";

export const Home = () => {
    return(
        <>
            <div className="home">
                <div>
                <Carusel />
                </div>
            </div>
            <img className="imgCook" src="Images/cook.png" />
        </>
    )
}
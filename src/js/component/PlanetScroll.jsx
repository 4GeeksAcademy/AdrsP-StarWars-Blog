import React from "react";
import Card from "./Card.jsx";

export const PlanetScroll = () => {

    return (
        <div className="container mt-5">
            <h2>Planets</h2>
            <div className="d-flex flex-row overflow-scroll" >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
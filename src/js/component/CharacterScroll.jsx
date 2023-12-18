import React from "react";
import Card from "./Card.jsx";

export const CharacterScroll = () => {

    return (
        <div className="container mt-5">
            <h2>Characters</h2>
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
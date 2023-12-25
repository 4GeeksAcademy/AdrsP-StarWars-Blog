import React from "react"

import { CharacterScroll } from "../component/CharacterScroll.jsx"
import { PlanetScroll } from "../component/PlanetScroll.jsx"

export const HomeView = () => {
    return (
        <div className="container">
            <CharacterScroll />
            <PlanetScroll />
        </div>
    )
}
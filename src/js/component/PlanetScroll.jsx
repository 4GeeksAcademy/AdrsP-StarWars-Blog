import React, { useContext, useEffect, useState } from "react";
import CardPlanet from "./CardPlanet.jsx";
import { Context } from "../store/appContext.js";

export const PlanetScroll = () => {
    const [planetList, setPlanetList] = useState(null)

    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function aux() {
            await actions.getPlanets()
            setPlanetList(store.planets)
        }
        aux()
    }, []);

    return (
        <div className="container mt-5">
            <h2>Planet</h2>
            <div className="d-flex flex-row overflow-scroll" >
                {planetList && planetList.map((item, index) => (
                    <CardPlanet key={index} id={index + 1} name={item.name} url={item.url} />
                ))}
            </div>
        </div>
    )
}
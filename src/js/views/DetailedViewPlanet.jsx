import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";

export const DetailedViewPlanet = (props) => {
    const { id } = useParams()
    const [planetInfo, setPlanetInfo] = useState(null)
    const { store, actions } = useContext(Context);
    //hacer un fetch de people


    useEffect(() => {
        async function auxDos() {
            await actions.getPlanetInfo(id)
            setPlanetInfo(store.planet.result.properties)
        }
        auxDos()
    }, []);

    return (
        <div className="container" >
            <div className="img-texto" >
                {id == 1 ?
                    <img className="rounded float-start" src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" /> :
                    <img className="rounded float-start" src={"https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"} />
                }
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Interdum velit euismod in pellentesque massa. Consequat semper viverra nam libero. At lectus urna duis convallis convallis tellus id interdum velit. Ligula ullamcorper malesuada proin libero nunc consequat. Sit amet porttitor eget dolor morbi non. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Posuere ac ut consequat semper. Non tellus orci ac auctor augue mauris. Gravida arcu ac tortor dignissim convallis aenean et tortor. Aliquam nulla facilisi cras fermentum odio eu. Aliquam ultrices sagittis orci a scelerisque purus. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Eget est lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>
            {planetInfo &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Climate</th>
                            <th scope="col">Population</th>
                            <th scope="col">Orbital Period</th>
                            <th scope="col">Rotation Period</th>
                            <th scope="col">Diameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{planetInfo.name}</th>
                            <td>{planetInfo.climate}</td>
                            <td>{planetInfo.population}</td>
                            <td>{planetInfo.orbital_period}</td>
                            <td>{planetInfo.rotation_period}</td>
                            <td>{planetInfo.diameter}</td>
                        </tr>
                    </tbody>
                </table>}
        </div>
    )
}
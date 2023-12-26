import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";

export const DetailedViewPerson = (props) => {
    const { id } = useParams()
    const [personInfo, setPersonInfo] = useState(null)
    const { store, actions } = useContext(Context);
    //hacer un fetch de people


    useEffect(() => {
        async function auxDos() {
            await actions.getPersonInfo(id)
            setPersonInfo(store.person.result.properties)
        }
        auxDos()
    }, []);

    return (
        <div className="container" >
            <div className="img-texto p-2" >
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} className="rounded float-start" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Interdum velit euismod in pellentesque massa. Consequat semper viverra nam libero. At lectus urna duis convallis convallis tellus id interdum velit. Ligula ullamcorper malesuada proin libero nunc consequat. Sit amet porttitor eget dolor morbi non. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Posuere ac ut consequat semper. Non tellus orci ac auctor augue mauris. Gravida arcu ac tortor dignissim convallis aenean et tortor. Aliquam nulla facilisi cras fermentum odio eu. Aliquam ultrices sagittis orci a scelerisque purus. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Eget est lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>
            {personInfo &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Heigth</th>
                            <th scope="col">Skin color</th>
                            <th scope="col">Eye color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{personInfo.name}</th>
                            <td>{personInfo.birth_year}</td>
                            <td>{personInfo.gender}</td>
                            <td>{personInfo.height}</td>
                            <td>{personInfo.skin_color}</td>
                            <td>{personInfo.hair_color}</td>
                        </tr>
                    </tbody>
                </table>}
        </div>
    )
}
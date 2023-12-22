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
            <div className="img-texto" >
                <img src="https://fastly.picsum.photos/id/989/600/400.jpg?hmac=nbIJP-vbUFgDCM-vmV5lVhVC8tpT9oVJsE1qYCOAj6c" class="rounded float-start" />
                <p>texto descriptivo {id}</p>
            </div>
            {personInfo &&
                <table class="table">
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
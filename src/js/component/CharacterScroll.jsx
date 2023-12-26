import React, { useContext, useEffect, useState } from "react";
import Card from "./Card.jsx";
import { Context } from "../store/appContext.js";

export const CharacterScroll = () => {
    const [peopleList, setPeopleList] = useState(null)

    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function aux() {
            await actions.getPeople()
            setPeopleList(store.people)
        }
        aux()
    }, []);

    return (
        <div className="container mt-5">
            <h2>Character</h2>
            <div className="d-flex flex-row overflow-scroll" >
                {peopleList && peopleList.map((item, index) => (
                    <Card key={index} id={index + 1} name={item.name} gender={item.gender} />
                ))}
            </div>
        </div>
    )
}
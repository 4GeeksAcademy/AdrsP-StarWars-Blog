import React, { useContext, useEffect, useState } from "react";
import Card from "./Card.jsx";
import { Context } from "../store/appContext.js";
import propTypes from "prop-types";

export const CharacterScroll = () => {
    const [peopleList, setPeopleList] = useState(null)
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function aux() {
            await actions.getPeoples()
            setPeopleList(store.people.results)
            console.log(peopleList)
        }
        aux()
    }, []);

    return (
        <div className="container mt-5">
            <h2>Characters</h2>
            <div className="d-flex flex-row overflow-scroll" >
                {peopleList && peopleList.map((item, index) => (
                    <Card name={item.name} url={item.url} />
                ))}
            </div>
        </div>
    )
}
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarWarNavbar = () => {

    const { store, actions } = useContext(Context)
    //const [favoritesList, SetFavoritesList] = useState(store.favorites)


    return (
        <nav className="navbar">
            <div className="container">
                <Link to={"/"} className="btn btn-lg">
                    <i className="fa-solid fa-jedi fa-2xl"></i>
                </Link>
                <div className="btn-group">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                        Favoritos
                    </button>
                    <ul className="dropdown-menu">
                        {store.favorites.map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

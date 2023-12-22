import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarWarNavbar = () => {

    const { store, actions } = useContext(Context)
    const [favoritesList, SetFavoritesList] = useState(null)


    return (
        <nav className="navbar">
            <div class="container">
                <Link to={"/"} className="btn btn-lg">
                    <i class="fa-solid fa-jedi fa-2xl"></i>
                </Link>
                <div class="btn-group">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                        Favoritos
                    </button>
                    <ul class="dropdown-menu">
                        {(store.favorites).map((item, index) => (
                            <li><a class="dropdown-item" href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

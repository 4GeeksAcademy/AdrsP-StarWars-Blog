import React from "react";
import { Link } from "react-router-dom";

export const StarWarNavbar = () => {
    return (
        <nav className="navbar">
            <div class="container">
                <button className="btn-lg">
                    <i class="fa-solid fa-jedi fa-2xl"></i>
                </button>
                <div class="btn-group">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                    Favoritos
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

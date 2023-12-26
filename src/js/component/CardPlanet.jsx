import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card = (props) => {

    const [fondo, SetFondo] = useState("regular")
    const { store, actions } = useContext(Context)

    const changefondo = () => {
        if (fondo == "regular") {
            SetFondo("solid")
            actions.addFavorite(props.name)
            console.log(store.favorites)
        }
        else {
            SetFondo("regular")
            actions.addFavorite(props.name)
            console.log(store.favorites)
        }
    }

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            {props.id == 1 ?
                <img className="card-img-top" src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" /> :
                <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/planets/" + props.id + ".jpg"} />
            }
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.url}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/detailedViewPlanet/${props.id}`} className="btn btn-primary">View Planet!</Link>
                    <button onClick={() => changefondo()} className="btn btn-light" >
                        <i className={`fa-${fondo} fa-heart fa-lg pt-3`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
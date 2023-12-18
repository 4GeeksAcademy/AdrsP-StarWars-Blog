import React from "react";
import { Link } from "react-router-dom";


const Card = (props) => {
    return (
        <div className="card" key={props.key} style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.url}</p>
                <Link to={'/detailedView'} className="btn btn-primary">Find out more!</Link>
            </div>
        </div>
    );
};

export default Card;
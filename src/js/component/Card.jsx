import React from "react";
import { Link } from "react-router-dom";


const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet asdasdadasd ad ad ad asd asd asd a da dasda d a da da sda Lorem ipsum dolor sit amet asdasdadasd ad ad ad asd asd asd a da dasda d a da da sda</p>
                <Link to={'/detailedView'} className="btn btn-primary">Find out more!</Link>
            </div>
        </div>
    );
};

export default Card;
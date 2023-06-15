import React from "react";

const Card = (props) => {

    return (
        <div className='card'>
            <h5 className="card-body">{props.titulo}</h5>
            <div className="card-body">
                {props.children}
            </div>
        </div>


    )

}

export default Card
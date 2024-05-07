import React from "react";

function bloke(props) {
    return (
        <div className="flex20">
            <img  src={props.image} alt="проблема(((" className="img_main"/>
            <h3 class="flex20_h3">{props.title}</h3>
            <p className="flex20_p">{props.text}</p>
        </div>
    );
}

export default bloke;
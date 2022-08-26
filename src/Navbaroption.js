import React from "react";
import "./Navbaroption.css";

function Navbaroption({active,text,Icon}) {
    return (
        <div className={`Navbaroption ${active && "Navbaroption--active"}`}>
            <Icon />
            <h2>{text}</h2>

        </div>
    )
}

export default Navbaroption
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const Images=()=>
{
    const imgs=
    {
        width:'1200px',
        height:'600px'
    }
    return(
        <>
        <div>
            <img src="Images/wedding.jpg" style={imgs}></img>

        </div>
        </>
        )
}


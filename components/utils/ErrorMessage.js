import React, {useState} from "react";

export default function ErrorMessage(props){
    return( 
        <div className="form-error">
            <p>{props.message}</p>
        </div>
    )
}


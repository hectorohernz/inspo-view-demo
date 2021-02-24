import React, {useState} from "react";

export default function ErrorMessage(props){
    return( 
        <div className="alert alert-danger" role="alert">
         <p>{props.message}</p>
      </div>
    )
}


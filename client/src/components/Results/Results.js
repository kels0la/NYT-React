import React from "react";
import "./Results.css"

const Results = props => (

    <div className="card-body border">
      <a href={props.url}><h6 id={props._id}>{props.title}</h6></a>
      <p>{props.date}</p>
      <p><button className="btn btn-success save" onClick={() => props.handleSaveButton(props._id)}>Save</button></p>
    </div> 
);

export default Results;
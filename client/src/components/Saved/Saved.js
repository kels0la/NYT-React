import React from "react";
import "./Saved.css"

const Saved = props => {
  const date = props.date && props.date.slice(0, 10);
  return (
    <div className="card-body border">
      <a href={props.url}><h6 id={props._id}>{props.title}</h6></a>
      <p>{date}</p><span className="pull-right"><button>Delete</button></span>
    </div> 
  )
}; 

export default Saved;
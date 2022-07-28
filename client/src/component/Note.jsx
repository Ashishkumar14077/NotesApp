import React from "react";
import {format} from 'timeago.js';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";

function Note(props) {
  function handleDelClick() {
    props.onDelete(props._id);
  }

  return (
    <div className="note" >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="date">
        <p>{format(props.date)}</p>
        <div>
          <button onClick={handleDelClick}><DeleteIcon /></button>
          <Link to={`edit/${props._id}`}><button><EditIcon /></button></Link>
        </div>
      </div>
      
    </div>
  );
}

export default Note;
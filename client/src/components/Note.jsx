import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Note(props) {
  function handleClick() {
    const id = props.id;
    axios.delete(`http://localhost:5000/api/tasks/${id}`).then( res =>{
       props.onDelete(id)
    }).catch(err => console.log(err))
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="noteicon">
        <Link to="/update"state={{from:props.id}}><EditIcon /></Link>
      </button>
      <button onClick={handleClick} className="noteicon">
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Container, Zoom } from '@mui/material';
import { Fab } from '@mui/material';
import axios from 'axios';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) { 
    if(note.title!=="" && note.content!==""){
    axios.post('http://localhost:5000/api/tasks',{
      title:note.title,
      content:note.content
    }).then(res =>{
      setNote({
        title:"",
        content:""
      })
      props.onAdd(res.data)
    }).catch(err => console.log(err))
    }
    event.preventDefault();

  }

  function expand() {
    setExpanded(true);
  }

  return (
    <Container maxWidth="sm">
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            required
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          required
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded} onClick={submitNote} >
          <Fab>
             <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </Container>
  );
}

export default CreateArea;

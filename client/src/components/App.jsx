import React, { useState , useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { Grid } from "@mui/material";
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
     axios.get('http://localhost:5000/api/tasks').then(res => {
       setNotes(res.data)
     }).catch(err => console.log(err))
  }, [])
  

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    const newList = notes.filter(note => (note._id !== id))
    setNotes(newList);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Grid 
      container direction="row" 
      justifyContent="space-between" 
      alignItems="flex-start" 
      columnSpacing={4}
      rowSpacing={4}>
      {notes.map((noteItem) => {
        return (
          <Grid item xl={3} lg={3} md={6} sm={12} xs={12} className="gridnote">
           <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
          </Grid>
        );
      })}
      </Grid>
      <Footer />
    </div>
  );
}

export default App;

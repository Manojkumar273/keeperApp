import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import Header from './Header';
import Note from "./Note";
import { Grid } from "@mui/material";


function Result(){
    const [getnotes,setGetnotes] = useState([])
    const location = useLocation();
    const {from} = location.state;
    useEffect(() => {
     axios.get(`http://localhost:5000/api/tasks/search/${from}`).then(res => {
       const result = res.data;
       setGetnotes(result)
     }).catch(err => console.log(err))
  }, [])

    function deleteNote(id) {
        const newList = getnotes.filter(note => (note._id !== id))
        setGetnotes(newList);
    }

    return (
        <div>
            <Header/>
            {getnotes!==[] ? 
                <Grid 
                container direction="row" 
                justifyContent="space-between" 
                alignItems="flex-start" 
                columnSpacing={4}
                rowSpacing={4}>
                {getnotes.map((noteItem) => {
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
                </Grid> : <h1>Not found!</h1>}
        </div>
    )
}


export default Result;
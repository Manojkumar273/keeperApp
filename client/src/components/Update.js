import React ,{useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import { Container} from '@mui/material';
import axios from 'axios'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useNavigate} from 'react-router-dom';

function Update() {

    const navigate = useNavigate();

     const [updatenote, setUpdatenote] = useState({
            id:"",
            title: "",
            content: ""
    });

    const location = useLocation();
    const {from} = location.state;
     useEffect(() => {
     axios.get(`http://localhost:5000/api/tasks/${from}`).then(res => {
       const result = res.data;
       setUpdatenote({
           id:result._id,
           title:result.title,
           content:result.content
       })
     }).catch(err => console.log(err))
  }, [])

   function handleChange(event) {
    const { name, value } = event.target;

    setUpdatenote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function onSubmit(event){
       if(updatenote.title!=="" && updatenote.content!==""){
            axios.put(`http://localhost:5000/api/tasks/${updatenote.id}`,{
                _id:updatenote.id,
                title:updatenote.title,
                content:updatenote.content
            }).then(res => {
                navigate("/");
            }).catch(err => console.log(err))
        }
        event.preventDefault();
  }

  return (
    <Container maxWidth="sm">
      <form className="update-note">
          <input
            name="title"
            value={updatenote.title}
            placeholder="Title"
            onChange={handleChange}
          />
        <textarea
          name="content"
          value={updatenote.content}
          placeholder="Update a note..."
          onChange={handleChange}
        />
        <button onClick={onSubmit}><ArrowCircleUpIcon /></button>
      </form>
    </Container>
  );
}

export default Update;
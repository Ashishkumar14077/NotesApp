import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

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

  // function submitNote(event) {
  //   props.onAdd(note);
  //   setNote({
  //     title: "",
  //     content: ""
  //   });
  //   event.preventDefault();
  // }
  const submitNote = async(e)=>{
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault()
    try{
      const token = localStorage.getItem('tokenStore')
      if(token){
        const {title, content} = note;
        const newNote = {
          title,content
        }
        await axios.post('/api/notes',newNote,{
          headers: {Authorization: token}
        })
      } 
    } catch(err){
      window.location.href="/";
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
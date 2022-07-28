import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios'

function Home() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState('');

  const getNotes = async(token)=>{
    const res = await axios.get('api/notes',{
        headers:{Authorization: token}
    })
    // console.log(res)
    setNotes(res.data)
  }
  const deleteNote = async(id) =>{
    try{
      if(token){
        await axios.delete(`api/notes/${id}`,{
          headers:{Authorization: token}
        })
        getNotes(token)
      }
    } catch(error){
      window.location.href = "/";
    }
  }
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  useEffect(()=>{
    const token = localStorage.getItem('tokenStore')
    setToken(token)
    if(token){
        getNotes(token)
    }
  },[])

  return (
    <div>
      {/* <Header /> */}
      <CreateArea onAdd={addNote} />
      {notes.map(noteItem => {
        return (
          <Note
            key={noteItem._id}
            _id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            date = {noteItem.updatedAt}
            name = {noteItem.name}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory,useParams } from 'react-router-dom';

function EditNote(){
    const [note, setNote] = useState({
        title: "",
        content: "",
        id: ""
    });
    const params = useParams();
    const history = useHistory();

    useEffect(()=>{
        const getNote = async ()=>{
            const token = localStorage.getItem('tokenStore')
            if(params.id){
                const res = await axios.get(`/api/notes/${params.id}`,{
                    headers: {Authorization: token}
                })
                setNote({
                    title:res.data.title,
                    content:res.data.content,
                    id: res.data._id
                })
                // console.log(params.id);
                // console.log(res);
            }
        }
        getNote()
    },[params.id])

    const onChangeInput = e => {
        const {name, value} = e.target;
        setNote({...note, [name]:value})
    }

    const editNote = async(e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if(token){
                const {title, content, id} = note;
                const newNote = {
                    title, content
                }

                await axios.post(`/api/notes/${id}`, newNote, {
                    headers: {Authorization: token}
                })
                return history.push('/')
            }
        } catch (err) {
            window.location.href = "/";
        }
    }

    return(
    <div>
        <h2>Edit Note</h2>
      <form autoComplete="off" className="create-note">
        <input
        type="text"
        name="title"
        onChange={onChangeInput}
        value={note.title}
        placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
          onChange={onChangeInput}
          value={note.content}
          placeholder="Take a note..."
        />
        
        <button onClick={editNote} type="submit">Save</button>

      </form>
    </div>
    )
}

export default EditNote
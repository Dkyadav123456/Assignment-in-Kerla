import React, { useState } from "react";
import NotesContext from "./noteContext";

const NoteState = (props) => {
  let host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //get all not
  const getNote = async () => {
    //API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/getNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo",
      },
    });
    //const jason = response.json();
    //logic part

    const json = await response.json();
    setNotes(json);
  };
  //   Add note
  console.log("data added");
  const addNote = async (title, description, tag) => {
    //API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log(note, "data");
    setNotes(notes.concat(note));
  };
  // delete note
  const deleteNote = async (id) => {
    //api call
    // eslint-disable-next-line
    const res = await fetch(`${host}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo",
      },
    });
    let jason = await res.json();
    console.log(jason);
    //logic
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // edit note
  const editNote = async (id, title, description, tag) => {
    //API Call
    // eslint-disable-next-line
    const response = await fetch(`${host}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    //return response.json();
    //logic part
    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    // in modern js we can pas only key like =>{state,update}
    // <NotesContext.Provider value ={{state:state,update:update}}>
    <NotesContext.Provider
      value={{ notes, addNote, getNote, deleteNote, editNote }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
export default NoteState;

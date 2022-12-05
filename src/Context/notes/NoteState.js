import React,{useState} from "react";
import NotesContext from "./noteContext";

const NoteState = (props) => {
  let host = "http://localhost:5000"
    // let s1 ={
    //     "name":"Danish",
    //     "place":"dhanbad"
    // }
    // const [state, setState] = useState(s1)
    // const update = ()=>{
    //     setTimeout(() => {
    //       setState({
    //         "name":"Ray",
    //         "place":"jharkhand"
    //       })
    //     }, 1000)
        
    // }
    const notesInitial = []
      const [notes, setNotes] = useState(notesInitial)
      //get all not
      const getNote =async ()=>{
        //API call
        // eslint-disable-next-line 
         const response =await fetch(`${host}/getNotes`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            'x-api-key':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo'
          }
          
           });
        //const jason = response.json(); 
        //logic part
        
        const json = await response.json() 
        setNotes(json)
      }
    //   Add note
    console.log("data added")
    const addNote =async (title,description,tag)=>{
      //API call
      // eslint-disable-next-line 
       const response =await fetch(`${host}/notes`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo'
        },
        body: JSON.stringify({title,description,tag})
         });
         const note = await response.json();
         console.log(note,'data')
         setNotes(notes.concat(note))
      //logic part
      //   let note={
      //       // "_id": "63709713ba84e6b35960e009",
      //       // "userId": "6370706384521d11954ca8d9",
      //       "title": title,
      //       "description": description,
      //       "tag": tag,
      //       // "createdAt": "2022-11-13T07:04:51.500Z",
      //       // "updatedAt": "2022-11-13T09:46:24.229Z",
      //       // "__v": 0
      //     }
      // setNotes(notes.concat(note))
    }
    // delete note
    const deleteNote =async (id)=>{
      //api call
      // eslint-disable-next-line
      const res =await fetch(`${host}/delete/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo'
        }
       
         });
       let jason = await res.json(); 
       console.log(jason)
      //logic
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
    }
    // edit note
    const editNote = async (id,title,description,tag)=>{
      //API Call
      // eslint-disable-next-line
      const response = await fetch(`${host}/update/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo'
        },
        body: JSON.stringify({title,description,tag})
         });
      //return response.json(); 
      //logic part
      let newNotes = JSON.parse(JSON.stringify(notes))
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
    }
    return (
        // in modern js we can pas only key like =>{state,update}
        // <NotesContext.Provider value ={{state:state,update:update}}> 
        <NotesContext.Provider value ={{notes,addNote,getNote,deleteNote,editNote}}> 
            {props.children}
        </NotesContext.Provider>
    )
}
export default NoteState



// import NoteContext from "./noteContext";
// import { useState } from "react";

// const NoteState = (props) => {
//   const host = "http://localhost:5000"
//   const notesInitial = []
//   const [notes, setNotes] = useState(notesInitial)

//   // Get all Notes
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch(`${host}/getNotes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//           'x-api-key':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzcwNzA2Mzg0NTIxZDExOTU0Y2E4ZDkiLCJpYXQiOjE2NjgzMTMxOTR9.CGufc2JVcHRZC7GU3xjvlCkiynv3WUEzyHZmaYh2AZo'
//       }
//     });
    // const json = await response.json() 
    // setNotes(json)
//   }

//   // Add a Note
//   const addNote = async (title, description, tag) => {
//     // TODO: API Call
//     // API Call 
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       },
//       body: JSON.stringify({title, description, tag})
//     });

  //   const note = await response.json();
  //   setNotes(notes.concat(note))
  // }

//   // Delete a Note
//   const deleteNote = async (id) => {
//     // API Call
//     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       }
//     });
//     const json = response.json(); 
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)
//   }

//   // Edit a Note
//   const editNote = async (id, title, description, tag) => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       },
//       body: JSON.stringify({title, description, tag})
//     });
//     const json = await response.json(); 

//      let newNotes = JSON.parse(JSON.stringify(notes))
//     // Logic to edit in client
//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].title = title;
//         newNotes[index].description = description;
//         newNotes[index].tag = tag; 
//         break; 
//       }
//     }  
//     setNotes(newNotes);
//   }

//   return (
//     <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   )

// }
// export default NoteState;
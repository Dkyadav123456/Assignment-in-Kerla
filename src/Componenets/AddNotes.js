import React,{useState,useContext} from 'react'
import noteContext from "../Context/notes/noteContext";

const AddNotes = () => {
    let Context = useContext(noteContext)
    // eslint-disable-next-line
   let {addNote} = Context
   const [note,setNote]=useState(
    {
        title:"",
        description:"",
        tag:""
    }
    )
   const handleClick = (e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
   }
   const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
   }
  return (
    <div className="container my-3">
    <h1>Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onchange}/>
        </div>
        <div className="mb-3 ">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" className="form-control" id="tag" name="tag" onChange={onchange}/>
        </div>
        <button disabled ={note.title.length<5||note.description.length<5||note.tag.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNotes

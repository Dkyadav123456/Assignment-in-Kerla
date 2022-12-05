import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../Context/notes/noteContext";
import AddNotes from "./AddNotes";
import NoteItem from "./Noteitem";

const Notes = () => {
  let Context = useContext(noteContext)

  let { notes, getNote,editNote } = Context
  useEffect(() => {
    getNote()
    // eslint-disable-next-line 
  }, []);
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note,setNote]=useState(
    {    
       id : "",
        etitle:"",
       edescription:"",
        etag:""
    }
    )
  const updateNote = (cNote) => {
    ref.current.click()
    console.log(cNote)
    setNote({
      id:cNote._id,
      etitle:cNote.title,
      edescription:cNote.description,
      etag:cNote.tag
    })
  }
 
  const handleClick = (e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag)
    ref.current.click()
    console.log("updateting note",note)
  
   }
   const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
   }

  return (
    <>
      <AddNotes />
    
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled ={note.etitle.length<5||note.edescription.length<5||note.etag.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

     
      <div className="row my-3">
        <h1>Your Notes</h1>
          {/* <div className="container mx-2">
            {notes.length ===0 && "no notes to display"}
          </div> */}
        {notes.map((note) => {
          // return note._id
          return <NoteItem key={notes._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
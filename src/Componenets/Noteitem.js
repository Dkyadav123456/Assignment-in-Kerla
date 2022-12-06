import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
const NoteItem = (props) => {
  const { note, updateNote } = props;
  let Context = useContext(noteContext);

  let { deleteNote } = Context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <i
            className="far fa-trash-alt mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="far fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default NoteItem;
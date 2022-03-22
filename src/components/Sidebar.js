import React from 'react'

function Sidebar({notes, addNote ,deleteNote, activeNote, setActiveNote}) {
  const noteElement = notes.map(note => (
    <div className={`note ${note.id === activeNote && "active"}`} key={note.id} onClick={()=>setActiveNote(note.id)}>

      <div className="note-title">
        <strong>{note.title}</strong>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div> 

      <p className='note-preview'>{note.body && note.body.substr(0, 100)+ "..."}</p>
      <small>Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
        hour:"2-digit",
        minute:"2-digit"
      })}</small>    
    </div>
  )
  )
  return (
    <div className='sidebar'>
      <div className="header">
        <h2>Notes</h2>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes">
        {noteElement}
      </div>
    </div>
  )
}

export default Sidebar
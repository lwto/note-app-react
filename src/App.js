import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

export default function App(){

  
  const [notes,setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const addNote = () =>{
    const newNote = {
      id:uuid(),
      title:"Untitled Note",
      body:"",
      lastModified:Date.now()
    }
    setNotes([newNote,...notes])
  }

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    

  return(
    <div className='container'>
      <Sidebar notes={notes} addNote={addNote} deleteNote={deleteNote} />
      {notes.length>0 ? <Main /> : <h2 className='no-note'>No Active Note</h2>}
    </div>
  )
}
import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

export default function App(){

  const [notes,setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const[activeNote, setActiveNote]= React.useState(false)

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

  const currentNote = ()=>{
    return notes.find(note => note.id === activeNote)
  }

  const updateNote = (updatedNote)=>{
    const updatedNotesArray = notes.map(note => {
      if(note.id === activeNote){
        return updatedNote 
      }
      return note
    })
    setNotes(updatedNotesArray)
  }


  React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    

  return(
    <div className='container'>
      <Sidebar 
        notes={notes} 
        addNote={addNote} 
        deleteNote={deleteNote} 
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        currentNote={currentNote()} 
        updateNote={updateNote} 

      />
    </div>
  )
}
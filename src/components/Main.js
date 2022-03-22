import React from 'react'

function Main({currentNote, updateNote}) {
 const editNote = (key, value)=>{
  updateNote({
    ...currentNote,
    [key]:value,
    lastModified: Date.now()
  })
 }

 if(!currentNote) return <h2 className='no-note'>No Active Note</h2>

  return (
    <div className='main'>
      <div className="edit">
        <input 
          type="text" 
          name='title'
          id='title'
          autoFocus
          value={currentNote.title}
          onChange={(e)=>editNote('title', e.target.value)}
        />
        <textarea 
          name='body'
          id='body'
          placeholder='Write your note here...'
          value={currentNote.body}
          onChange={(e)=>editNote('body', e.target.value)}
        />
      </div>
      <div className="preview">
        <h1>{currentNote.title}</h1>
        <p>{currentNote.body}</p>
      </div>
    </div>
  )
}

export default Main
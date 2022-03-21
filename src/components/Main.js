import React from 'react'

function Main() {
  return (
    <div className='main'>
      <div className="edit">
        <input 
          type="text" 
          name='title'
          id='title'
          autoFocus
        />
        <textarea 
          name='body'
          id='body'
          placeholder='Write your note here...'
        />
      </div>
      <div className="preview">
        <h1>Title</h1>
        <p>Body</p>
      </div>
    </div>
  )
}

export default Main
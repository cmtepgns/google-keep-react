import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'

let createNotes = note => (
            <Note
            key={note.key}
            title={note.title}
            content={note.content}
            />
)


function App()
{
    return (
        <div>
            <h1>
            <Header />
            {notes.map(createNotes)}
            <Footer />
            </h1>
        </div>
    )
}

export default App 
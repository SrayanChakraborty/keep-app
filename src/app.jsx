import React from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import notes from './notes.js';


function createNote(note){
    return(
        <div>
            <Note 
                key={note.id}
                heading={note.title}
                content={note.content}
            />
        </div>

    )
}

function App() {
    return <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>

}

export default App;

import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setnote] = useState([]);

  function createarr(text) {
    setnote(prevval => {
      return [...prevval, text];
    })
  }

  function deletearr(id){
    setnote((prevval)=>{
     return(prevval.filter((note,index)=>{
        return index!==id;
      }))
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        addon={createarr}
      />
      {
        notes.map((note, index) => {
          return(<Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            ondelete={deletearr}
          />)
        })
      }

      <Footer />
    </div>
  );
}

export default App;

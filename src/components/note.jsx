import React from "react";



function Note(props) {

  function deletefunc(){
    props.ondelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deletefunc}>DELETE</button>
    </div>
  );
}

export default Note;

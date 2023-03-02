import React,{useState} from "react";

function CreateArea(props) {

  const[text,settext]=useState(
    {
      title:"",
      content:""
    }
  )

  function textfunc(event){
    const{name,value}=event.target;
    settext(prevval=>{
      return {
        ...prevval,
        [name]:value
      }
    })
  }

  function onclickfunc(event){
    event.preventDefault();
    props.addon(text);
    settext(
      {
        title:"",
        content:""

      }
    )

  }

  return (
    <div>
      <form>
        <input onChange={textfunc} name="title" placeholder="Title" value={text.title}/>
        <textarea onChange={textfunc} name="content" placeholder="Take a note..." rows="3" value={text.content} />
        <button onClick={onclickfunc}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

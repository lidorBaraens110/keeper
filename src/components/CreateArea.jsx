import React, { useState } from "react";

function CreateArea({ postText }) {

  const [text, setText] = useState({
    title: '',
    content: ''
  });

  function handlingChange(event) {
    const { name, value } = event.target;
    setText(preValue => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }


  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input value={text.title} name="title" placeholder="Title" onChange={handlingChange} />
        <textarea value={text.content} name="content" placeholder="Take a note..." rows="3" onChange={handlingChange} />
        <button onClick={() => {
          postText(text); setText({ title: '', content: '' })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

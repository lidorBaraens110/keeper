import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [list, setList] = useState([])
  function handlingText(newItem) {
    setList(preValue => {
      return [...preValue, newItem]
    })
  }

  function onDelete(id) {
    setList(preValue => {

      return preValue.filter((item, index) => {
        return id !== index
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea postText={handlingText} />
      {list.map((item, index) => {
        return <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteItem={onDelete}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;

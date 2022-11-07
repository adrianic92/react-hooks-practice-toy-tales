import React, {useState} from "react";

function ToyForm( { addNewToy } ) {
  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    const newToy = { 
      "name" : newName, 
      "image": newImage,
      "likes": 0
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(data => {
      addNewToy(data)
      setNewImage("")
      setNewName("")
    })
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newName}
          onChange={ e => setNewName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newImage}
          onChange={ e => setNewImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

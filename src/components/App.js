import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect( () => {
    fetch("http://localhost:3001/toys")
    .then( resp => resp.json())
    .then( data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function byeToy(id) {
    const missingToy = toys.filter( toy => toy.id !== id)
    setToys(missingToy)
  }

  function likeToy(id) {
    const updatedToys = toys.map( toy => {
      if (toy.id === id) {
        return { ...toy, likes: (toy.likes + 1) }
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer byeToy={byeToy} toys={toys} likeToy={likeToy}/>
    </>
  );
}

export default App;

import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, byeToy, likeToy } ) {
  
  const allToys = toys.map( toy => {
    return (
      <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} byeToy={byeToy} likeToy={likeToy} />
    )
  })

  return (
    <div id="toy-collection">{allToys}</div>
  );
}

export default ToyContainer;

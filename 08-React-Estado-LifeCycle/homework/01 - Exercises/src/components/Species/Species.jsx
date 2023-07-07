import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species(props) {

  return( 
  
      <div>
            <h2>Species</h2>

            {

              props.species.map((specie,id) => <button key= {id} value={specie} onClick={props.handleSpecies}>{specie}</button>)

            }

            <button onClick={props.handleAllSpecies}>All Animals</button>


      </div>

      )
}

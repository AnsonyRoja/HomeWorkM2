import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
import axios from 'axios';





export default function Zoo() {
  /* Escribe acá tu código */


  const [zoo,setZoo] = React.useState({
      zooName: "",
      animals:[],
      species:[],
      allAnimals: [],

  });

 
 
 const handleInputChange = (event)=>{
  // se debe realizar los cambios en todo el objeto para que no se pierda la data al momento
  // de realizar cambios en el input. 
    setZoo({zooName:event.target.value,animals:zoo.animals,species:zoo.species,allAnimals:zoo.allAnimals});
                                                                                  
 }

 



 
 React.useEffect(()=>{
 
  axios(`http://localhost:3001/zoo`)
  .then(response => response.data)
  .then((data) => {
     
     if (data.animals) {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        });
     } else {
       
     }
  });


},[])

const handleSpecies = (event) => {
  

  let animalesPt = zoo.allAnimals.filter((animal) => animal.specie === event.target.value );
  
  setZoo({...zoo,animals:animalesPt,species:zoo.species})
      
      
    }




 const handleAllSpecies = () =>{
  
  setZoo({...zoo,animals:zoo.allAnimals,species:zoo.species});

 }


  return (
    <div>

      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Species species= {zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals zoo= {zoo.animals || zoo.allAnimals} />

    </div>
  );
}

import React from "react";
import { Botones } from "./Botones";
const studentName = "Ansony";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(

    <div>
        <h1>Esto es un titulo</h1>
        <h3>{studentName}</h3>

          {

            techSkills.map((element) => <li>{element}</li>)
            
          
          }
        <Botones m1="m1" m2="m2"/>
    </div>

  );
  
  
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };


//Un componente actualizara la informacion que renderiza solo cuando
//* Se producen cambios en el estado
//* Recibe nuevas propiedades
import React from "react";
import Zoo from "./components/Zoo/Zoo.jsx";

export default function App() {
  return (
    <div>
      <Zoo />
    </div>
  );
}

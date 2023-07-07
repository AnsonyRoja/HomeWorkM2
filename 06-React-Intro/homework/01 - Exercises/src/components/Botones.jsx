import React from "react";


function Botones({m1,m2}){

    return(
        <div>
            <button onClick = {()=> alert(m1)}>Modulo 1</button>
            <button onClick= {() => alert(m2)}>Modulo 2</button>
        </div>

    );
}

export {Botones};
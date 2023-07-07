// store.dispatch({type:'AUMENTAR_COUNT'});
// store.dispatch({type:'CAMBIAR_INSTRUCTOR', payload:'Ansony'})
// store.dispatch({type:'MODIFICAR_ALUMNOS', payload:['Raul','Diego','Fabi']})
// store.dispatch({type:'SUMAR_ALUMNOS', payload: ['Martin','Roberto','CISCO']})

// se crean constantes para evitar errores de tipeo

const {AUMENTAR_COUNT,CAMBIAR_INSTRUCTOR,MODIFICAR_ALUMNOS,CREARNUEVO_ALUMNO} = require('./action-types');


const aumentarCount=() =>{
   return{
    type:AUMENTAR_COUNT
    }
}

const cambiarInstructor = () =>{
    return{
    type: CAMBIAR_INSTRUCTOR,payload:'Ansony'
    }
}

const modificarAlumnos = () =>{
    return{
        type:MODIFICAR_ALUMNOS, payload:['Raul','Diego','Fabi']
    }
}

const crearNuevoAlumno = (name, ...rest) =>{
   
        return {

            type:CREARNUEVO_ALUMNO, payload:[name,...rest],
        }

}


module.exports ={
    aumentarCount,
    cambiarInstructor,
    modificarAlumnos,
    crearNuevoAlumno,
}
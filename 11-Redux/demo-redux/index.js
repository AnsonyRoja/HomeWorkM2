



const {createStore} = require('redux');
const reducer = require('./reducer');
const {aumentarCount, cambiarInstructor, modificarAlumnos,crearNuevoAlumno} = require('./actions')

const store = createStore(reducer);

store.dispatch(aumentarCount());
store.dispatch(cambiarInstructor());
store.dispatch(modificarAlumnos());

store.dispatch(crearNuevoAlumno('Mariano','Forbes','Rubert'));

console.log(store.getState());



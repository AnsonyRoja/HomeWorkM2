
const {AUMENTAR_COUNT,CAMBIAR_INSTRUCTOR,MODIFICAR_ALUMNOS,CREARNUEVO_ALUMNO} = require('./action-types');
console.log(AUMENTAR_COUNT)

const initialState = {
    count: 0,
    instructor: '',
    cohorte: '',
    alumnos: [],
}

const reducer = (state = initialState, action) => {

        switch(action.type){

            case AUMENTAR_COUNT:
                return {
                            ...state,
                            count: state.count +1,
                        }
            case CAMBIAR_INSTRUCTOR:

                return{
                  
                    ...state,
                    instructor: action.payload,
                    

                }

            case MODIFICAR_ALUMNOS:

            return{

                ...state,
                        alumnos:action.payload,

            }
             
            case CREARNUEVO_ALUMNO:

            return{
                    ...state,
                    alumnos:[...state.alumnos,...action.payload],

            }


            default:
                return{...state};
        }



        // if(action.type=== 'AUMENTAR_COUNT'){

        //     return {
        //         ...state,
        //         count: state.count +1,
        //     }

        // }

        // if(action.type === 'CAMBIAR_INSTRUCTOR'){

        //      return {

        //         ...state,
        //         instructor: action.payload,
        //      }
        // }

        // if(action.type === 'MODIFICAR_ALUMNOS'){

        //     return {
        //         ...state,
        //         alumnos:action.payload,
        //     }

        // }

        // if(action.type === 'SUMAR_ALUMNOS'){

        //     return{
        //         ...state,
        //         alumnos:[...state.alumnos, ...action.payload]
        //     }

        // }

}




module.exports = reducer;
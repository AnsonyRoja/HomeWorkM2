import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {

  // Extra Credit
  incrementIfOdd = () => {
    
      if(this.props.count % 2 !== 0){

          this.props.incrementar();

      }
      

  };
  // Extra Credit
  incrementAsync = () => {

    setTimeout(() => {

      this.props.incrementar();

    },1000)


  };

 
  render() {
    // Completa las funciones onClick de los botones
    // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
    return (
      <p>
        Clickeado: {this.props.count} veces
        
        <button
          onClick={() => {
           
           this.props.incrementar();
           
          }}
        >
          + {/* Incremeta */}
        </button>
        <button
          onClick={() => {
            this.props.decrementar();
          }}
        >
          - {/* Decrementa */}
        </button>
        {/* Si quieres hacer los extra credit puede descomentar las líneas de abajo */}
        <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa después de un segundo
                </button> 
      </p>
    );
  }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) =>{


    return {

        incrementar:  () => dispatch(increment()),
        decrementar: () => dispatch(decrement())
      }

}

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

const buttonAgregar = document.querySelector("#agregar");

const cambiarColor = function(event){
    // console.log(event);
    const elemento = event.target;

    if(elemento.className === "recuadro"){

        elemento.className = "recuadroVerde";
    }else{
        elemento.className = "recuadro";
    }

}

const clickHandler = function(){

    const contenedor = document.querySelector("#contendir");

    const newDiv = document.createElement('div');
    newDiv.innerText = "Hola, FT 40a";
    newDiv.className = 'recuadro';
    newDiv.addEventListener('click', cambiarColor);
        contenedor.appendChild(newDiv);

    };



buttonAgregar.addEventListener("click", clickHandler);


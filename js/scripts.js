//Validar formulario

const inputs = document.querySelectorAll('form .campo input');
// console.log(inputs);

//Listener a los inputs

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput)
});

function validarInput(e) {

    const estado = ['valido', 'no-valido'];
    let clase;
    if(e.target.value.length===0){
        clase = estado[1];
    }else{
        clase = estado[0];
    }
    // console.log(clase);
    if(clase === 'no-valido'){
        //construir un mensaje de error
    }else{
        //limpiar el mensaje de error si existe
    }
}
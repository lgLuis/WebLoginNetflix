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
        if(e.target.parentElement.nextElementSibling.classList[0]!=='alerta'){
            const errorDiv =document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Éste elemento es obligatorio'));
            errorDiv.classList.add('alerta');
            //Insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv,
                e.target.parentElement.nextElementSibling);
        }

    }else{
        //limpiar el mensaje de error si existe
    }
}
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
    e.target.classList.remove(...estado);
    e.target.classList.nextElementSibling(...estado); 
    e.target.classList.add(clase);
    e.target.classList.nextElementSibling(clase);
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
        if(e.target.parentElement.nextElementSibling.classList[0]==='alert'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

//Mostrar y ocultar password

const mostrarPassbtn=document.querySelector('form .campo span');
// console.log(mostrarPassbtn)
mostrarPassbtn.addEventListener('click', e=>{
    const passwordInput =document.querySelector('#password');

    if(e.target.classList.contains('mostrar')) {
        //mostrar el texto
        e.target.classList.remove('mostrar');
        //cambiar el texto
        e.target.textContent='Ocultar';
        //
        passwordInput.type='text';
    }else{
        //mostrar el password
        e.target.classList.add('mostrar')
        //cambiar el texto
        e.target.textContent='Mostrar';
        //Cambiamos el password
        passwordInput.type='password';

    }
})

//creé una constante llamada formLogin la cual almacenará el campo del login
//se hace el llamado en '#loginForm'
//---------------------------------------------------
//document es un objeto
// el document. significa que irá al documento html seguido de un metodo llamado
//querySelector, el cual nos sirve para consultar el elemento indicado en los parametros del metodo
const formLogin = document.querySelector('#loginForm')

//este apartado es para crear un metodo el cual se basará en:
// hacemos llamado a la variable formLogin seguido de un metodo llamado .addEventListener, el cual su función
//es agregar un evento cuando escucha lo que indiquemos. 
//En su primer parametro le indicamos al evento que estará atento, en este caso es cuando el usuario 
//haga clic en submit (boton)
//Su segundo parametro será una nueva función que se ejecutará cuando hayan hecho el submit, el primer parametro
formLogin.addEventListener('submit', (e) =>{
    //Luego hacemos llamado al encargado de ejecutar el metodo (e) y le indicamos mediante un metodo
    //que no ejecutará el evento predeterminado que tiene, o sea quitamos su funcionamiento predeterminado, el 
    //el cual es una función que pertenece al objeto del evento y se utiliza para prevenir el 
    //comportamiento predeterminado del evento, que en este caso sería enviar el formulario y 
    //recargar la página
    e.preventDefault()
    //-----------------------------------------------------------
    //creé dos constantes que almacenarán los inputs del archivo login, con el objeto document
    //le indicamos que use el metodo querySelector, **YA EXPLICADO ARRIBA**
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    
    //creamos una constante llamada Users donde se almacenará lo conseguido en el localStorage con la clave
    //user en formato objeto de js, se indica JSON.parse porque lo que llega a buscar con el getItem 
    //es en formato JSON, todo esta informacion se encuenta en el navegador en las cookies.
    const Users = JSON.parse(localStorage.getItem('users')) || [] //pero sino evalua con el operador logico
    // || y crea un array vacío 

    //Se crea una constante llamada valuoUsers que almacenará la busqueda de unos valores en el array Users
    //usamos el user como un tipo iterable que busque el valor de email y lo compare con los valores que ya
    //existen al igual que la contraseña, todo eso se almacena en una variable para luego evaluarla
    const valuoUsers = Users.find(user => user.email === email & user.password === password)

    //con este if se verifica si lo que hay en la variable valuoUsers es diferente, o sea false, si lo es
    //se retornará un mensaje indicando que ingresó mal los valores, con el return se finaliza la ejecución
    //del codigo
    if(!valuoUsers){
        return alert("Usuario y/o contraseña incorrectos :(")
    }
    //si no entra en el if fue porque si son iguales asi que mostrará una alerta indicando que están correctos
    alert("Datos correctos, ¡bienvenido!")

    //hacemos llamado al objeto de localStorage seguido de un metodo setItem, el cual nos ayudará a colocar
    //el valor de valuoUsers de tipo JSON en la clave Acceso_user
    localStorage.setItem('Acceso_user', JSON.stringify(valuoUsers))

    //redirección de ventana/pestaña, con le objeto window.location.href decimos que nos lleven a la ventana 
    //en la locación con la dirección 'index.html'
    window.location.href = 'index.html'


})
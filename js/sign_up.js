// Creación de mini "base de datos" con LocalStorage

//creo una constante llamada formRegistro que contendrá la información recolectada por medio del metodo
//querySelector, el elemento buscado será resgistroForm
const  formRegistro = document.querySelector('#registroForm')
//luego con la misma constante creada le adicionamos un metodo, el cual se basa en capturar eventos 
//en este caso el evento a capturar será el submit, se indica en el primer parametro.Ya en el segundo parametro
//se crea un nuevo metodo que se ejecutará cuando el primer parametro se haya recibido.
formRegistro.addEventListener('submit', (e)=>{
    //Luego hacemos llamado al encargado de ejecutar el metodo (e) y le indicamos mediante un metodo
    //que no ejecutará el evento predeterminado que tiene, o sea quitamos su funcionamiento predeterminado, el 
    //el cual es una función que pertenece al objeto del evento y se utiliza para prevenir el 
    //comportamiento predeterminado del evento, que en este caso sería enviar el formulario y 
    //recargar la página    
    e.preventDefault()

    //creamos cinco variables donde guardaremos el valor ingresado en los inputs que se encuentran
    //en el archivo registro.html
    const name = document.querySelector('#name').value
    const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const genero = document.querySelector('#genero').value

    //---------------------------------------------------------------------
    //¿Qué es LocalStorage?
    //localStorage es un objeto en JavaScript que proporciona una interfaz de almacenamiento persistente 
    //y de clave-valor en el navegador web. Permite a las aplicaciones web almacenar datos de forma local 
    //en el navegador, lo que significa que los datos persisten incluso después de que el navegador se cierra 
    //o se reinicia.
    //----------------------------------------------------------------------------------

    //se crean estas dos variables, la Users será para obtener los datos almacenados en el LocalStorage, con
    //el get se busca/consigue la clave indicada en el parametro, la cual es "users" si existe esa clave en
    //el localStorage lo almacena en la constante Users y ya luego hace las siguientes instrucciones
    const Users = JSON.parse(localStorage.getItem('users')) || []//pero sino evalua con el operador logico
    // || y crea un array vacío 

    //se crea una nueva constante llamada registroUser donde se almacenará la constante Users junto 
    //a un metodo llamado .find que nos ayudará a encontrar un elemento
    //en este caso creamos user para poder recorrer lo que haya en Users, por eso ponemos user.email, porque 
    //user en este caso es un iterable que intenta conseguir el valor email que introdujo el usuario
    //y lo compara con toda la lista de email para saber si ya existe y eso almacenarlo en registroUser
    const registroUser = Users.find(user => user.email === email)
    
    //creamos este condicional para evaluar la variable registroUser, si almacenó true retornará 
    //una alerta indicando que ya existe ese correo, y al retornar se vuelve a reiniciar todo, o sea no pushea 
    //nada, ni sigue a las demas lineas
    if(registroUser){
        return alert('Este usuario ya existe. Pruebe otro correo ;)')
    }
    //----------------------------------------
    //Hacemos uso de la constante Users y le agregamos un metodo .push, el cual lo que hace es añadir uno o más
    //elementos l final del array y te arroja la longitud del array.
    //-----------------------------------------
    //En este caso le decimos que en con la clave name almacene el valor name del formulario
    //y asi con el resto de inputs. 
    //Cuando venga otro usuario a registrarse lo que hará es guardar nuevamente esta información en formato
    //objeto de javascript en la ultima posición
    Users.push({name: name, lastname:lastname, email: email, password: password, genero: genero})
    //hacemos uso del objeto localStorage seguido de un metodo llamado setItem, set significa colocar
    //con los siguientes parametros: users el cual es para la clave, el segundo parametro es para 
    //convertir lo almacenado en la constante Users en formato JSON, pasar de un objeto js a un formato JSON
    localStorage.setItem('users', JSON.stringify(Users))

    //Si llego a este punto se le mostrará una alerta de exito
    alert('Registro exitoso :)')

    // Redirección a la página de login, window significa que en la ventana con la locación que se indica en
    //el href = 'login.html'

    window.location.href = 'login.html'

})
const user = JSON.parse(localStorage.getItem('Acceso_user')) || false
if(!user){
    window.location.href = 'login.html'
}

const cerrar = document.querySelector('#button_cerrar')

cerrar.addEventListener('click', ()=>{
    alert("Cerraste sesión")
    localStorage.removeItem('Acceso_user')
    window.location.href = 'login.html'
})
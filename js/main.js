function sign (){
	var inicia = document.getElementById('form-signin-heading');
	inicia.innerHTML = 'Por favor inicia sesión';
}
sign();

function email (){
	var correo = document.getElementById('inputEmail').placeholder = 'Correo Electrónico';
	var contrasena = document.getElementById('inputPassword').placeholder = 'Contraseña';
}
email();

function check(){
	var check = document.querySelector('label span');
	check.innerHTML = "Recordarme";
}
check();

function boton(){
	var button = document.querySelector('button');
    button.innerHTML = "Iniciar Sesión";
}
boton();
'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Maria Alejandra Montoya",
	profesion: "Desarrollador junior",
	correo: "bats.ww@gmail.com",
	telefono: "+57 3218389090",
	perfil: "tecnico auxiliar en servivios farmaceuticos ,Me forme como técnico auxiliar en servicios farmacéuticos en el SENA adquiriendo conocimientos idoneos con competencias en la promocion de la salud  ' ¨, 'estudiante de tecnologia  en ADSI, ' ",
	habilidades: {
		comunicativas:['Asertiva, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, '],
		gestion: ['Liderazgo, ','Responsabilidad, ', 'facilidad de palabra, trato agradable con las personas, ' ,'Análisis para toma de Decisiones'],
		tecnicas: ['Tecnico Auxiliar En Servivios Farmaceuticos, ']
	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'leer, ', ]
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arregloAmigos = [];
let listaAmigosDOM = document.getElementById("listaAmigos");
let resultadoDOM = document.getElementById("resultado")
let inputNombre = document.getElementById("amigo");

function comprobarTexto(texto) {
	return texto.length == 0;
}

function limpiarListaAmigosDOM() {
	listaAmigosDOM.innerHTML = '';
}

function limpiarResultadoDOM() {
	resultadoDOM.innerHTML = '';
}

function limpiarInput() {
	inputNombre.value = '';
}

function elegirAmigo() {
	const indiceAleatorio = Math.floor(Math.random() * arregloAmigos.length);
	return nombreSorteado =  arregloAmigos[indiceAleatorio];
}

function agregarAmigo() {
	let textoIngresado = inputNombre.value;
	// console.log(textoIngresado);
	// console.log(comprobarTexto(textoIngresado));

	if (!comprobarTexto(textoIngresado)) {
		arregloAmigos.push(textoIngresado);
		limpiarListaAmigosDOM();
		limpiarResultadoDOM()

		arregloAmigos.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		listaAmigosDOM.appendChild(li);
		limpiarInput();
		});

	} else {
		alert("¡Por favor, ingrese un nombre.");
	}

}

function sortearAmigo() {

	if (arregloAmigos.length == 0) {
		alert("¡Primero debes ingresar el nombre de tus amigos!");
	} else {
		limpiarListaAmigosDOM();
		resultadoDOM.innerHTML = '';

		let li = document.createElement("li");
		li.innerText = 'El amigo sorteado es: ' + elegirAmigo();
		li.style.color = '#fe652b'; // Un especie de naranja
		resultadoDOM.appendChild(li);
		limpiarInput();
		arregloAmigos.length = 0;	//Vacía el arreglo --> se debe comenzar de cero

	}


}

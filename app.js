// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arregloAmigos = [];
let ulDom = document.getElementById("listaAmigos");
let inputNombre = document.getElementById("amigo");

function comprobarTexto(texto) {
	return texto.length == 0;
}

function limpiarLista() {
	ulDom.innerHTML = '';
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
		limpiarLista();

		arregloAmigos.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		ulDom.appendChild(li);
		limpiarInput();
		});

	} else {
		alert("¡Debe ingresar un nombre!");
	}

}

function sortearAmigo() {

	if (arregloAmigos.length == 0) {
		alert("¡Primero debes ingresar el nombre de tus amigos!");
	} else {
		limpiarLista();

		let li = document.createElement("li");
		li.innerText = 'El amigo sorteado es: ' + elegirAmigo();
		ulDom.appendChild(li);
		limpiarInput();

	}


}

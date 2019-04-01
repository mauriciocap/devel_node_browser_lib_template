/**
	@file Tu modulo tiene que empezar en src/index

	Podes usar import y export para conseguir y exponer todas las funciones que necesites.

	Y las construcciones nuevas de javascript, porque se _transpila_ usando babel como dice babel.config.js	 en la carpeta del proyecto.

	Más ejemplos de como usar jsdoc para documentar en src/example/index.js

*/

import * as example from './example'; //A: si no hay ningun import no funcionan source maps de coverage!

export function unaFuncionExportada(queHago) {
	if (queHago=='magia') {
		console.log("OjO! nadie es perfecto");
		return 'no pruebes';
	}


	if (queHago=='portate bien') {
		return 'me porto bien';
	}
	else if (queHago=='portate mal') {
		return '&%!"@%$"$!';
	}
	else if (queHago=='lanzá excepción') {
		throw new Error('la excepción que faltaba');
	}
	else {
		console.log("Quien te ha visto y quien te ve");
	}

	console.log("Esto paso alguna vez?");
}

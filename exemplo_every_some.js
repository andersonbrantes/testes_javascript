var carros = [];

carros[0] = {marca: "ford", modelo: "ka"};
carros[1] = {marca: "chevrolet", modelo: "corsa"};
carros[2] = {marca: "fiat", modelo: "palio"};


// Pergunta se TODOS os elementos são da marca ford
carros.every(function (elemento) {
	return elemento.marca === "ford";
});

// Pergunta se ALGUM elemento é da marca ford
carros.some(function (elemento) {
	return elemento.marca === "ford";
});


// Relembrando MAP, retorna novo array com as marcas
carros.map(function (elemento) {
	return elemento.marca;
});


var carros = [];

carros[0] = {marca: "ford", modelo: "ka"};
carros[1] = {marca: "chevrolet", modelo: "corsa"};
carros[2] = {marca: "fiat", modelo: "palio"};

// Soma elementos na forma tradicional
carros.forEach(function (elemento) {
	total += elemento.preco;
});

// Soma elementos com REDUCE
carros.reduce(function (prev, cur) {
	return prev + cur.preco;
}, 0);



// Exemplo1 

var carros = [];

carros[0] = {marca: "ford", modelo: "ka"};
carros[1] = {marca: "chevrolet", modelo: "corsa"};
carros[2] = {marca: "fiat", modelo: "palio"};

var carrosFord = [];

// trocar este
carros.forEach(function (elemento){
	if (elemento.marca === "ford") carrosFord.push(elemento);
});

// por este
var carrosFord = carros.filter(function (elemento){
	return elemento.marca === "ford";
});




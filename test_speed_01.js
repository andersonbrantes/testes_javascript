var paginaElementos = [ "<!DOCTYPE html>",
"<html lang='en'>",
"<head>",
  "<meta charset='UTF-8'>",
  "<title>Document</title>",
"</head>",
"<body>",

"</body>",
"</html>" ];

var pagina = "";

console.time(paginaElementos.length);

for(var i = 0, x = paginaElementos.length; i < x; i++) {
  pagina += paginaElementos[i];
}

// pagina = paginaElementos.join("\n");


console.timeEnd(paginaElementos.length);

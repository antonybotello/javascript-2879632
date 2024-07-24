var frutas = ["manzana", "pera", "uva", "sandía"];
console.log(frutas);
console.log(frutas[1]);
console.log(frutas.length);
console.log(frutas.indexOf("uvas"));

var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz);
console.log(matriz[2][1]);

var aprendices = [
    ["Miguel", "miguel@gmail.com", 17, 4.5],
    ["Juan", "juan@gmail", 13, 3.89],
    ["Pedro", "pedro@gmail", 14, 4.89],
    ["Maria", "maria@gmail", 15, 5.0]
]
console.log(aprendices);
for (var i = 0; i < aprendices.length; i++) {
    console.log("Registro #" + (i + 1));
    for (var j = 0; j < aprendices[i].length; j++) {
        console.log("       " + aprendices[i][j]);
    }

}

for (var i = 0; i < aprendices.length; i++) {
   console.log("Registro #" + (i + 1)+": "+aprendices[i][0]+" tiene "+aprendices[i][2]+" años y su correo es "+aprendices[i][1]);
}

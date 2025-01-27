//conversion de number a string 
let numero1 = 3;
let convertido1 = string(numero1);
console.log(typeof(convertido1));

//conversion de string a number
let numerotexto = "40";
let convertidonumero = number(numerotexto);
console.log(typeof(convertidonumero));

//conversion de string a boolean
let texto = "texto";
let convertida = Boolean(texto);
console.log(convertida);

//diferencias entre parametros y argumentos
function saludo(nombre, apellido, edad) {

}
//saludo ("agustin naruto ")
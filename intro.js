/*declara valaibles*/
console.log("\n*********************Variables************************\n");
var num1;
num1 = 4;
var num2;
num2 = 2;
console.log("Numero1: "+ num1+ "Numero2:"+ num2);

console.log("\n*********************Cadenas************************\n");
var frase1;
frase = "Ejemplo comollas dobles";
var frase2;
frase2 = "Ejemplo comillas simples";
var frase3;
frase3 ="Comillas invertidas";

console.log(frase1);
console.log(frase2);
console.log(frase3);

console.log("\n*********************Condicionales************************\n");

console.log(num1 > num2);

console.log("\n*********************Operadores logicos AND************************\n");
console.log(true && false);
console.log(true && true);

console.log("\n*********************Operadores logicos OR************************\n");
console.log(true || false );
console.log(false || false );

console.log("\n*********************Arreglos************************\n");
let listaDeNumeros = [2,3,5,7,11,234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16); /*Push Agrega dato*/
listaDeNumeros.push(939); /*push Agrega dato*/
console.log(listaDeNumeros);

let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Inovaccion"];

console.log(listaDePalabras);

let palabra ="Explorer";
console.log(palabra.length);/*.length da la longitud*/

console.log("\n*********************Objetos************************\n");
let explorer = {
  nombre:"Nombre del Explorer",
  email:  "email@innovaccion.mx",
  numReg: 123456,
  proyectos:["Abogabot", "Pasteleria", "Taqueria","Vacunacion"],
  proPer:{
    escolar: "Tareas",
    profecional: "Trabajo",
    personal: "Negocio"
  }
}

console.log(explorer);
console.log(explorer.email);
console.log(explorer.proPer);

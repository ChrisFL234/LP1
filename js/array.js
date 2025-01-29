//zona segura 
document.addEventListener("DOMContentLoaded", function(){
const frutas = ["pomelo", "naranja","manzana"];
const verduras = ["tomate", "locote","lechuga"];
const vero = {
    nombre: "veronica belen"
    , apellido: "vera irala"
    , edad: null
};
const ale = {
    nombre: "alexis"
    , apellido: "aguilera"
    , edad: 29
};
const jorge = {
    nombre: "jorge"
    , apellido: "acuña"
};

const personas = [vero, ale, jorge];

//length es el numero de elementos
//para encontra un elemento conocido

console.log (frutas.length);
console.log (verduras[verduras.length -1]);
console.log (personas);
frutas.push("pomelo");


});
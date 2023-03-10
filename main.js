//4. Construir el algoritmo que solicite el nombre y edad de 3
//personas y determine el nombre de la persona con mayor edad.

let personas = []
let nombres = []
let edades = []

function addPerson(){
    let nombre = prompt("Ingrese nu nombre: ");
    let edad = parseInt(prompt("Ingrese edad: "));
    personas.push({nombre, edad})
}
for (let i = 0; i < 3; i++){
    addPerson()
}

function listaNombres(){
    for (let i of personas)
        nombres.push(i.nombre);
}

function listaEdades(){
    for (let i of personas)
        edades.push(i.edad);
}

listaNombres();
listaEdades();

let nombreMayor = edades.indexOf(Math.max(...edades));
console.log(`La persona mayor es: ${nombres[nombreMayor]} y tiene ${Math.max(...edades)} años`);
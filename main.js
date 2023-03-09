// 1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"

let nota1 = (prompt("Ingrese su primera nota: "))
let nota2 = (prompt("Ingrese su segunda nota: "))
let nota3 = (prompt("Ingrese su tercera nota: "))
let prom = (nota1 + nota2 + nota3)/3

if (prom < 3.9) {
    alert("Estudie");
}
else if (prom > 3.9) {
    alert("Becado");
}
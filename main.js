// 10. Desarrolle un programa cíclico que capture un dato
// numérico cada vez, y los vaya acumulando. El programa se
// detiene cuando el usuario digita un cero. El programa debe
// mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
// PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
// VALOR Y MENOR VALOR.

let numeros = [];
let suma = 0;

function agregarNumeros(){
    do {
        num = parseInt(prompt("Ingrese un número: "));
        numeros.push(num);
    }while (num !== 0)
}

agregarNumeros();

for(let i = 0; i < numeros.length; i++) {
    suma += numeros[i];}
let total = numeros.length
alert(`La suma de los datos es: ${suma}`);
alert(`El promedio de los datos es: ${suma/total}`);
alert(`El total de valores digitados fue de: ${total}`);
alert(`El valor más alto fue: ${Math.max(...numeros)}`);
alert(`El valor más bajo fue: ${Math.min(...numeros)}`);






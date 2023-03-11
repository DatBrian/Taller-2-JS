// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let suma = num1 + num2;
let diff = num1 - num2;
let producto = num1 * num2;
let division = num1 / num2;

if (num1 > num2) {
    alert(`El prmer número es mayor, la suma entre ambos es igual a: ${suma} y la diferencia entre ambos es igual a: ${diff}`)
}
else if (num1 < num2) {
    alert(`El primer número es menor, el producto entre ambos es igual a: ${producto} y la división entre ambos es igual a: ${division}`)

}
else if (num1 === num2){
    alert("Ambos números son iguales")
}
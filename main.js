// 7. Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura.

let nombre = prompt("Ingrese el nombre del artículo que desea comprar: ");
let precio = parseFloat(prompt("Ingrese el precio del artículo que desea comprar: "));
let cantidad = parseInt(prompt("Ingrese la cantidad de artículos que desea comprar: "));
let total = parseFloat(precio * cantidad)
alert(`El total a pagar es: $${total}`);
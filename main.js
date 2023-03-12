// 8. Programa que Ingrese por teclado:
// a. el valor del lado de un cuadrado para mostrar por pantalla el
// perímetro del mismo
// b. la base y la altura de un rectángulo para mostrar el área del
// mismo

lado = parseFloat(prompt("Ingrese el lado de un cuadrado: "));
perimetro = lado *  4
alert(`El perímetro es igual al: ${perimetro}`);
base = parseFloat(prompt("Ingrese la base del rectángulo: "));
altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));
area = base * altura
alert(`El área del rectángulo es igual a: ${area}`)
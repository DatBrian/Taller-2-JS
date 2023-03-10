//3. Construir el algoritmo para determinar el voltaje de un
//circuito a partir de la resistencia y la intensidad de corriente.

let resistencia = parseFloat(prompt("Ingrese la resistencia: "));
let intensidad = parseFloat(prompt("Ingrese la intensidad: "));
let voltaje = (intensidad * resistencia);
alert(`El voltaje es: ${voltaje}`);

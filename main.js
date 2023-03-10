//Dado un número indicar si es par o impar y si es mayor de 10.

let numUs = parseInt(prompt("Ingrese un número: "));

if (numUs % 2 === 0 && numUs > 10){
    alert("Es par y mayor que 10");
}
else if (numUs % 2 === 0 && numUs < 10){
    alert("Es par pero menor qur 0")
}
else if(numUs % 2 !== 0 && numUs > 10){
    alert("Es impar y mayor que 10")
}
else if(numUs === 10){
    alert("Es par e igual a 10")
}
else{
    alert("Es impar y menor que 10")
}
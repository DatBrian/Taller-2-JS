// 9. N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.

let atletas = [];
let marcas = [];
let record = 15.50

function actualizarDatos(nombre, marca){
    atletas.push({
        nombre: nombre,
        marca: marca
    });
    marcas.push(marca);
}
function pedirDatos(){
    let nombre = prompt("Ingrese su nombre: ");
    let marca = parseFloat(prompt("Ingrese su marca: "));
    actualizarDatos(nombre, marca);
}
function calcularMayor(){
    let marcaMayor = Math.max(...marcas);
    let atletaMayor = atletas.find(atleta => atleta.marca === marcaMayor);
    if (marcaMayor > record){
        alert(`La atleta ${atletaMayor["nombre"]} ha superado el record actual con una marca de ${marcaMayor} ganando el premio de 500 millones`);
    }
    else{
        alert(`La ganadora de la medalla de oro con la mejor marca es: ${atletaMayor["nombre"]}`)
    }
}

function programa(){
    pedirDatos();
    if(confirm("¿Agregar otra atleta?")){
        programa();
    }
    else {
        calcularMayor();
    }
}

programa();
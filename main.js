// 6. Construir el algoritmo en Javascript para un programa
// para cualquier cantidad de estudiantes que lea el nombre,
// el sexo y la nota definitiva y halle al estudiante con la mayor
// nota y al estudiante con la menor nota y cuantos eran
// hombres y cuantos mujeres.

let estudiantes = [];
let nombres = [];
let notas = [];
let hombres = 0;
let mujeres = 0;

function actualizarDatos(nombre, nota, sexo) {
    estudiantes.push({
        nombre: nombre,
        sexo: sexo,
        nota: nota
    });
    nombres.push(nombre);
    notas.push(nota);
}
function pedirDatos(){
    let nombre = prompt("Ingrese su nómbre: ");
    let nota = parseInt(prompt("Ingrese su nota: "));
    let sexo = pedirSexo();
    actualizarDatos(nombre, nota, sexo);
}

function pedirSexo(){
    let sexo = prompt(`Ingrese su sexo ("M" o "F"):`)
    if (sexo === "M") {
        hombres++
        sexo = "Masculino"
        return sexo;

    }
    else if (sexo === "F"){
        mujeres++;
        sexo = "Femenino"
        return sexo;
    }
    else {
        return sexo = "indefinido"
    }
}

function calcularMayor (){
    let notaMayor = Math.max(...notas);
    let estudianteMayor = estudiantes.find(estudiante => estudiante.nota === notaMayor);
    alert(`El estudiante con la nota mayor es: ${estudianteMayor["nombre"]}`);
}

function calcularMenor (){
    let notaMenor = Math.min(...notas);
    let estudianteMenor = estudiantes.find(estudiante => estudiante.nota === notaMenor);
    alert(`El estudiante con la nota menor es: ${estudianteMenor["nombre"]}`);
}

function mostrarDatos(){
    console.log(estudiantes);
    console.log(nombres);
    console.log(notas);
    console.log(hombres);
    console.log(mujeres);
    calcularMayor();
    calcularMenor();
    alert(`Hay ${hombres} hombres y ${mujeres} mujeres`)
}

function programa (){
    pedirDatos()
    if (confirm("¿Quieres continuar")){
        programa();
    }else{
        mostrarDatos();
    }
}

programa();
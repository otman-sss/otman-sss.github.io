var elemento =0;

function Capturar() {
    document.getElementById("error").innerHTML = ``;
    var row = document.getElementById("renglon");
    var valor = row.insertCell(-1);
    // asignamos el valor del elemento
    valor.innerHTML = `[${elemento}]`;
    var row2 = document.getElementById("renglon2");
    var valor2 = row2.insertCell(-1);
    valor2.innerHTML = document.getElementById("datos").value;
    // agregamos los elementos de forma vertical
    var columna = document.getElementById("vertical");
    var renglónV = columna.insertRow(-1);
    var valorV2 = renglónV.insertCell(0);
    valorV2.innerHTML = `[${elemento}]`;
    var valorV = renglónV.insertCell(1);
    valorV.innerHTML = document.getElementById("datos").value;
    document.getElementById("datos").value = "";
    document.getElementById("datos").focus();
    document.getElementById("datos").value=Math.floor(Math.random()*100);
    console.log(document.getElementById("datos").value);
    document.getElementById("arreglo").innerHTML = `Capture el elemento [${elemento}]`;
    if (elemento >= 9) {
        document.getElementById("datos").disabled = true;
        document.getElementById("boton").disabled = true;
    }
    ++elemento;
}

function Reiniciar() {
    document.getElementById("renglon").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";
    document.getElementById("vertical").innerHTML = "";
    document.getElementById("datos").disabled = false;
    document.getElementById("boton").disabled = false;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [0]`;
    elemento = 0;
}
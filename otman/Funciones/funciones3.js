function Generar() {
    // Borra todas las columnas y renglones de la tabla.
    document.getElementById("cuadrado").innerHTML = "";

    // Agregamos renglones y columnas.
    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    var celda="", nuevaFila="", r = 0, c = 0;
    for (r = 0; r < lado; r++) {
        nuevaFila = tabla.insertRow(-1);
        celda = nuevaFila.insertCell(0);
        celda.innerHTML = "";
        celda.style.border = "none";
        for (c = 0; c < lado; c++) {
            celda = nuevaFila.insertCell(-1);
            var entrada = document.createElement("input");
            entrada.setAttribute("type", "number");
            entrada.setAttribute("value", Aleatorio());
            entrada.setAttribute("required", "required");    
            // Asignamos los estilos al input.
            entrada.setAttribute("style", "width:50px; color:blue; font-weight: bold;");
            celda.appendChild(entrada);
        }
        var celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma";
    }

    nuevaFila = tabla.insertRow(-1);
    for (c = 0; c < lado + 2; c++) {
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma";
    }
    tabla.rows[lado].cells[c-1].innerHTML = "diagonal1";
    tabla.rows[lado].cells[0].innerHTML = "diagonal2";
}

function Aleatorio() {
    return Math.floor(Math.random() * 100);
}

function EjemploMagico() {
    var tabla = document.getElementById("cuadrado");
    for (let r = 0; r < document.getElementById("lados").value; r++) {
        for (let c = 1; c <= document.getElementById("lados").value; c++) {
            tabla.rows[r].cells[c].querySelector('input').value = 
            document.getElementById("lados").value;
        }
    }
    document.getElementById("verificar").innerHTML = "Si es cuadrado magico";
    document.getElementById("verificar").style = "color: blue;";
}

function EjemploCuadrado() {
    var tabla = document.getElementById("cuadrado");
    var r = 0, c = 0;
    for (r = 0; r < document.getElementById("lados").value; r++) {
        for (c = 1; c < document.getElementById("lados").value; c++) {
            tabla.rows[r].cells[c].querySelector('input').value =
             Aleatorio();
        }
    }
    tabla.rows[r-1].cells[c-1].querySelector('input').value = -1;
    document.getElementById("verificar").innerHTML = "No es cuadrado magico";
    document.getElementById("verificar").style = "color: crimson;";
}

function Calcular() {
     var tabla = document.getElementById("cuadrado");
     var lado = tabla.rows.length - 1;  
     var r = 0, c = 0, sumaFila = 0, sumaColumna = 0;
     var sumaDiagonal1 = 0, sumaDiagonal2 = 0;

     //Suma Horizontal 
    for (r = 0; r < lado; r++) {
        sumaFila = 0;
        for (c = 1; c <= lado; c++) {  //Inicia en la columna 1, no en 0, debido a la columna invisible
            sumaFila += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[r].cells[lado + 1].innerHTML = sumaFila;  
    }

     //Suma Vertical 
    for (c = 1; c <= lado; c++) {
        sumaColumna = 0;
        for (r = 0; r < lado; r++) {
            sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[lado].cells[c].innerHTML = sumaColumna;  
    }

     //Suma Diagonal1 izquierda
    for (r = 0; r < lado; r++) {
        sumaDiagonal1 += parseInt(tabla.rows[r].cells[r + 1].querySelector('input').value); 
    }
    tabla.rows[lado].cells[lado + 1].innerHTML = sumaDiagonal1;  

     //Suma Diagonal2 derecha
    for (r = 0; r < lado; r++) {
        sumaDiagonal2 += parseInt(tabla.rows[r].cells[lado - r].querySelector('input').value);  
    }
    tabla.rows[lado].cells[0].innerHTML = sumaDiagonal2;  
}
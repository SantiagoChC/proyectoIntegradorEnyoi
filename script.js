const texto = "textcenter";

let i = 0;
function escribirTexto() {
    if (i < texto.length) {
        document.querySelector("#textcenter").textContent += texto.charAt(i);
        i++;
        setTimeout(escribirTexto, 50); // Velocidad de escritura (50 ms)
    }
}

escribirTexto();

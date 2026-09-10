const button = document.getElementById("startButton");
const sections = document.querySelectorAll("section");
const pasos = document.querySelectorAll(".paso");
const paquete = document.getElementById("paquete");
const flujo = document.querySelector(".flujo");
const estado = document.getElementById("estado");

function moverPaquete(paso) {

    const flujoRect = flujo.getBoundingClientRect();
    const pasoRect = paso.getBoundingClientRect();

    const x = pasoRect.left - flujoRect.left
        + (pasoRect.width / 2)
        - (paquete.offsetWidth / 2);

    const y = pasoRect.top - flujoRect.top
        + (pasoRect.height / 2)
        - (paquete.offsetHeight / 2);

    paquete.style.left = x + "px";
    paquete.style.top = y + "px";
}


button.addEventListener("click", function () {

    // Mostrar las secciones una por una
    sections.forEach(function(section, index) {

        setTimeout(function() {
            section.classList.add("visible");
        }, index * 700);

    });


    // Destacar los pasos
    pasos.forEach(function(paso, index) {

        setTimeout(function() {
            paso.classList.add("activo");
        }, 4000 + index * 1800);

    });


    // Mostrar el paquete en el navegador
setTimeout(function() {

    paquete.innerHTML = "📨";
    paquete.style.opacity = "1";

    moverPaquete(pasos[0]);

    estado.textContent = "📨 Enviando solicitud...";

}, 4000);


    // Viajar hacia Internet
    setTimeout(function() {

        moverPaquete(pasos[1]);
	estado.textContent = "🌐 La solicitud está viajando...";

    }, 5800);


    // Llegar al servidor
    setTimeout(function() {

        moverPaquete(pasos[2]);
	estado.textContent = "💻 El servidor recibió la solicitud.";

    }, 7600);
	
    // El servidor prepara la respuesta
    setTimeout(function() {

        paquete.innerHTML = "📦";
	estado.textContent = "📦 Enviando los archivos...";

    }, 9400);


    // La respuesta vuelve a Internet
    setTimeout(function() {

        moverPaquete(pasos[1]);

    }, 9600);


    // La respuesta llega al navegador
    setTimeout(function() {

        moverPaquete(pasos[0]);
	estado.textContent = "✨ ¡Página cargada!";

    }, 11200);
});

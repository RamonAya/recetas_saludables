// =========================
// Siempre en casa
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("gridBasicos");

    // Si esta página no tiene la sección de básicos, no hacemos nada.
    if (!contenedor || typeof alimentosBasicos === "undefined") return;

    renderBasicos();

    // -------------------------
    // Renderizar fichas
    // -------------------------

    function renderBasicos() {

        contenedor.innerHTML = alimentosBasicos.map(alimento => `

            <article class="basico-card">

                <button class="basico-toggle">

                    <div class="basico-icono">
                        <img src="${alimento.imagen}" alt="${alimento.nombre}">
                    </div>

                    <div class="basico-resumen">
                        <h3>${alimento.nombre}</h3>
                        <p>${alimento.resumen}</p>
                    </div>

                    <span class="flecha">⌄</span>

                </button>

                <div class="basico-contenido">

                    <section class="basico-bloque">

                        <h4>💚 ¿Por qué es un básico?</h4>

                        <ul class="basico-lista">

    ${alimento.porque
        .split("\n")
        .map(item => `<li>${item}</li>`)
        .join("")}

</ul>

                    </section>

                    <section class="basico-bloque">

                        <h4>💡 Ideas para usarlo</h4>

                        <ul>

                            ${alimento.ideas.map(idea => `<li>${idea}</li>`).join("")}

                        </ul>

                    </section>

                    <section class="basico-bloque">

                        <h4>🧊 Conservación</h4>

                        <ul class="basico-lista">

    ${alimento.conservacion
        .split("\n")
        .map(item => `<li>${item}</li>`)
        .join("")}

</ul>

                    </section>

                    <section class="basico-bloque">

                        <h4>🥗 Combina especialmente bien con...</h4>

                        <div class="chips-combina">

                            ${alimento.combina.map(item => `<span>${item}</span>`).join("")}

                        </div>

                    </section>

                </div>

            </article>

        `).join("");

        activarAcordeon();

    }

    // -------------------------
    // Acordeón
    // -------------------------

    function activarAcordeon() {

        document.querySelectorAll(".basico-toggle").forEach(boton => {

            boton.addEventListener("click", () => {

    const ficha = boton.parentElement;
    const estabaAbierta = ficha.classList.contains("abierto");

    // Cerramos todas las fichas
    document.querySelectorAll(".basico-card").forEach(card => {
        card.classList.remove("abierto");
    });

    // Si la que hemos pulsado estaba cerrada, la abrimos
    if (!estabaAbierta) {
        ficha.classList.add("abierto");
    }

});

        });

    }

});
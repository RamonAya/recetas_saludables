document.addEventListener("DOMContentLoaded", () => {
  const habitos = [

"💧 Bebe suficiente agua durante el día. A veces confundimos la sed con el hambre.",

"🥕 Intenta que haya verduras tanto en la comida como en la cena.",

"🥜 Tener un snack saludable preparado ayuda a evitar decisiones impulsivas.",

"🍎 Prioriza la fruta entera frente a los zumos siempre que puedas.",

"🚶‍♂️ Un paseo de 15 minutos después de comer también cuenta.",

"🥣 Cocinar una ración extra hoy puede ahorrarte tiempo mañana."

];

const textoHabito = document.getElementById("textoHabito");

if(textoHabito){

    textoHabito.textContent = habitos[Math.floor(Math.random()*habitos.length)];

}
  const contenedor = document.getElementById("gridRecetas");
  const paginacion = document.getElementById("paginacionRecetas");
  const buscador = document.getElementById("buscadorRecetas");
  const botonesFiltro = document.querySelectorAll(".filtro-btn");

  if (!contenedor || !paginacion || typeof recetas === "undefined") return;

  const RECETAS_POR_PAGINA = 6;

  let filtroActivo = "Todas";
  let textoBusqueda = "";
  let paginaActual = 1;

  function filtrarRecetas() {
    return recetas.filter(receta => {
      const coincideTipo =
        filtroActivo === "Todas" || receta.tipo === filtroActivo;

      const texto = `${receta.titulo} ${receta.descripcion} ${receta.categoria} ${receta.tipo}`.toLowerCase();
      const coincideBusqueda = texto.includes(textoBusqueda.toLowerCase());

      return coincideTipo && coincideBusqueda;
    });
  }

  function renderRecetas(lista) {
    if (!lista.length) {
      contenedor.innerHTML = `
        <div class="sin-resultados">
          <p>No se han encontrado recetas con esos filtros.</p>
        </div>
      `;
      paginacion.innerHTML = "";
      return;
    }

    const inicio = (paginaActual - 1) * RECETAS_POR_PAGINA;
    const fin = inicio + RECETAS_POR_PAGINA;
    const recetasPagina = lista.slice(inicio, fin);

    contenedor.innerHTML = recetasPagina.map(receta => {
      return `
        <article class="card-receta">
          <div class="card-receta-imagen-wrap">
            <img
              src="${receta.imagen}"
              alt="${receta.titulo}"
              class="card-receta-imagen"
            />
          </div>

          <div class="card-receta-contenido">
            <div class="card-receta-top">
              <span class="card-receta-categoria">${receta.categoria}</span>
              <span class="card-receta-tiempo">🕒 ${receta.tiempo}</span>
            </div>

            <h2>${receta.titulo}</h2>
            <p>${receta.descripcion}</p>

            <div class="card-receta-acciones">
              <a href="recetas/${receta.slug}.html" class="btn-principal">Ver receta</a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderPaginacion(lista) {
    const totalPaginas = Math.ceil(lista.length / RECETAS_POR_PAGINA);

    if (totalPaginas <= 1) {
      paginacion.innerHTML = "";
      return;
    }

    let botones = "";

    for (let i = 1; i <= totalPaginas; i++) {
      botones += `
        <button class="pagina-btn ${i === paginaActual ? "activa" : ""}" data-pagina="${i}">
          ${i}
        </button>
      `;
    }

    paginacion.innerHTML = botones;

    const botonesPagina = paginacion.querySelectorAll(".pagina-btn");
    botonesPagina.forEach(btn => {
      btn.addEventListener("click", () => {
        paginaActual = Number(btn.dataset.pagina);
        actualizarVista();
        window.scrollTo({
          top: contenedor.offsetTop - 120,
          behavior: "smooth"
        });
      });
    });
  }

  function actualizarVista() {
    const listaFiltrada = filtrarRecetas();

    const totalPaginas = Math.max(1, Math.ceil(listaFiltrada.length / RECETAS_POR_PAGINA));
    if (paginaActual > totalPaginas) paginaActual = 1;

    renderRecetas(listaFiltrada);
    renderPaginacion(listaFiltrada);
  }

  if (buscador) {
    buscador.addEventListener("input", (e) => {
      textoBusqueda = e.target.value.trim();
      paginaActual = 1;
      actualizarVista();
    });
  }

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      botonesFiltro.forEach(btn => btn.classList.remove("activo"));
      boton.classList.add("activo");
      filtroActivo = boton.dataset.tipo;
      paginaActual = 1;
      actualizarVista();
    });
  });

   botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      botonesFiltro.forEach(btn => btn.classList.remove("activo"));
      boton.classList.add("activo");
      filtroActivo = boton.dataset.tipo;
      paginaActual = 1;
      actualizarVista();
    });
  });

  // Mostrar el número de recetas en el Hero
  const contadorRecetas = document.getElementById("contadorRecetas");

if (contadorRecetas) {
    contadorRecetas.textContent = `${recetas.length} recetas para descubrir`;
}
  if (contadorHero) {
    contadorHero.textContent = `${recetas.length} recetas`;
  }

  actualizarVista();
});

document.querySelectorAll(".basico-toggle").forEach(boton => {

    boton.addEventListener("click", () => {

        const tarjeta = boton.parentElement;

        const abierta = tarjeta.classList.contains("abierto");

        document.querySelectorAll(".basico-card").forEach(card => {

            card.classList.remove("abierto");

            card.querySelector(".flecha").textContent = "⌄";

        });

        if(!abierta){

            tarjeta.classList.add("abierto");

            boton.querySelector(".flecha").textContent = "⌄";

        }

    });

});
const botonesCategoria = document.querySelectorAll(".categoria-btn");
const recetas = document.querySelectorAll(".tarjeta-receta");
const filtroActual = document.getElementById("filtro-actual");
const formularioBusqueda = document.getElementById("buscador-form");
const inputBusqueda = document.getElementById("buscador-input");

let categoriaSeleccionada = "todas";

function aplicarFiltros() {
  const textoBusqueda = inputBusqueda.value.toLowerCase().trim();

  recetas.forEach((receta) => {
    const categoria = receta.dataset.categoria;
    const titulo = receta.querySelector("h3").textContent.toLowerCase();
    const descripcion = receta.querySelector("p").textContent.toLowerCase();

    const coincideCategoria =
      categoriaSeleccionada === "todas" || categoria === categoriaSeleccionada;

    const coincideBusqueda =
      titulo.includes(textoBusqueda) || descripcion.includes(textoBusqueda);

    if (coincideCategoria && coincideBusqueda) {
      receta.classList.remove("oculta");
    } else {
      receta.classList.add("oculta");
    }
  });
}

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", () => {
    categoriaSeleccionada = boton.dataset.categoria;
    filtroActual.textContent =
      boton.querySelector("span:last-child").textContent;
    aplicarFiltros();
  });
});

formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();
  aplicarFiltros();
});

inputBusqueda.addEventListener("input", aplicarFiltros);
/* Punto de entrada y navegación entre pantallas */
const seleccion = { cat: "todas", dif: "facil" };
/* RF-01: el nombre es obligatorio y no puede quedar vacío */
function validarNombre() {
  const v = $("#nombre").value.trim(),
    err = $("#error-nombre");
  err.hidden = v.length > 0;
  if (!v) {
    $("#nombre").focus();
    return false;
  }
  guardarPrefs({ nombre: v });
  return true;
}
function ir(id) {
  detenerJuego();
  if (id === "config" && !validarNombre()) {
    mostrar("inicio");
    $("#nombre").focus();
    return;
  }
  if (id === "config") renderConfig(seleccion);
  if (id === "ranking") renderRanking();
  if (id === "ajustes") renderAjustes();
  mostrar(id);
  if (id === "inicio") $("#error-nombre").hidden = true;
}
document.addEventListener("DOMContentLoaded", () => {
  const p = obtenerPrefs();
  aplicarTema(p.tema);
  $("#nombre").value = p.nombre;
  document.addEventListener("click", (e) => {
    iniciarMusica(); // los navegadores exigen una interacción del usuario para reproducir audio
    const t = e.target.closest("button");
    if (!t) return;
    if (t.dataset.ir) ir(t.dataset.ir);
    else if (t.dataset.cat) {
      seleccion.cat = t.dataset.cat;
      renderConfig(seleccion);
    } else if (t.dataset.dif) {
      seleccion.dif = t.dataset.dif;
      renderConfig(seleccion);
    } else if (t.dataset.sonido) {
      guardarPrefs({ sonido: t.dataset.sonido === "1" });
      renderAjustes();
    } else if (t.dataset.musica) {
      guardarPrefs({ musica: t.dataset.musica === "1" });
      if (t.dataset.musica === "1") iniciarMusica();
      else detenerMusica();
      renderAjustes();
    } else if (t.dataset.tema) {
      guardarPrefs({ tema: t.dataset.tema });
      aplicarTema(t.dataset.tema);
      renderAjustes();
    } else if (t.classList.contains("opcion")) responder(Number(t.dataset.i));
  });
  $("#nombre").addEventListener("keydown", (e) => {
    if (e.key === "Enter") ir("config");
  });
  $("#btn-comenzar").addEventListener("click", () => {
    if (validarNombre())
      iniciarPartida(obtenerPrefs().nombre, seleccion.cat, seleccion.dif);
  });
  $("#c-cincuenta").addEventListener("click", () => usarComodin("cincuenta"));
  $("#c-tiempo").addEventListener("click", () => usarComodin("tiempo"));
  $("#btn-siguiente").addEventListener("click", siguientePregunta);
  $("#btn-borrar").addEventListener("click", () => $("#dlg").showModal());
  $("#dlg-no").addEventListener("click", () => $("#dlg").close());
  $("#dlg-si").addEventListener("click", () => {
    borrarRanking();
    $("#dlg").close();
    renderRanking();
  });
  renderConfig(seleccion);
});

/* Galería: si falta una imagen, muestra qué archivo hay que guardar en docs/diseno/ */
document.addEventListener(
  "error",
  (e) => {
    const i = e.target;
    if (i.tagName !== "IMG" || !i.closest("#galeria")) return;
    const p = document.createElement("p");
    p.className = "pendiente";
    p.textContent = `Imagen pendiente: guarda ${i.getAttribute("src")}`;
    i.closest("a").replaceWith(p);
  },
  true,
);

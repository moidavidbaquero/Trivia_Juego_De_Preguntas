/* Renderizado de pantallas en el DOM */
const $ = (s) => document.querySelector(s);
const NOMBRES = {
  geografia: "Geografía",
  historia: "Historia",
  cultura: "Cultura y Tradiciones",
  deportes: "Deportes",
  naturaleza: "Ciencia y Naturaleza",
  todas: "Todas",
};
const fmt = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
function mostrar(id) {
  document.querySelectorAll(".pantalla").forEach((s) => {
    s.hidden = s.id !== id;
  });
  const h = $(`#${id} h1`);
  if (h) {
    h.tabIndex = -1;
    h.focus();
  }
}
/* Sonidos generados con Web Audio (no requieren archivos) */
let audio;
function sonar(ok) {
  if (!obtenerPrefs().sonido) return;
  try {
    audio = audio || new AudioContext();
    const o = audio.createOscillator(),
      g = audio.createGain();
    o.type = ok ? "sine" : "sawtooth";
    o.frequency.value = ok ? 660 : 180;
    g.gain.value = 0.08;
    o.connect(g);
    g.connect(audio.destination);
    o.start();
    o.stop(audio.currentTime + 0.25);
  } catch (e) {
    /* sin audio */
  }
}
/* Música de fondo: melodía original y suave (pentatónica sobre acordes C-Am-F-G) generada con Web Audio */
let musica = null,
  compas = 0;
const ACORDES = [
  [130.8, 164.8, 196],
  [110, 130.8, 164.8],
  [87.3, 110, 130.8],
  [98, 123.5, 146.8],
];
function tono(f, t, d, v) {
  const o = audio.createOscillator(),
    g = audio.createGain();
  o.type = "sine";
  o.frequency.value = f;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(v, t + 0.08);
  g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g);
  g.connect(audio.destination);
  o.start(t);
  o.stop(t + d);
}
function sonarCompas() {
  const t = audio.currentTime + 0.05,
    a = ACORDES[compas++ % 4];
  a.forEach((f) => tono(f, t, 2.6, 0.05));
  for (let i = 0; i < 6; i++)
    tono(
      a[Math.floor(Math.random() * 3)] * (i % 2 ? 4 : 2),
      t + i * 0.4,
      1.2,
      0.03,
    );
}
function iniciarMusica() {
  if (musica || !obtenerPrefs().musica) return;
  try {
    audio = audio || new AudioContext();
    audio.resume();
  } catch (e) {
    return;
  }
  sonarCompas();
  musica = setInterval(sonarCompas, 2400);
}
function detenerMusica() {
  clearInterval(musica);
  musica = null;
}
function aplicarTema(t) {
  document.documentElement.dataset.tema = t;
}
function marcar(contenedor, attr, valor) {
  document
    .querySelectorAll(`${contenedor} [${attr}]`)
    .forEach((b) =>
      b.setAttribute(
        "aria-pressed",
        String(b.getAttribute(attr) === String(valor)),
      ),
    );
}
function actualizarPuntaje() {
  $("#puntos").textContent = `Puntaje ${estado.puntaje}`;
}
function actualizarTiempo() {
  const t = Math.max(0, estado.tiempoRestante);
  $("#tiempo").textContent = fmt(t);
  $("#tiempo").classList.toggle("urgente", t <= 5);
}
function actualizarComodines() {
  $("#c-cincuenta").disabled = !estado.comodines.cincuenta || estado.respondida;
  $("#c-tiempo").disabled = !estado.comodines.tiempo || estado.respondida;
}
function ocultarOpciones() {
  document.querySelectorAll("#opciones .opcion").forEach((b, i) => {
    b.hidden = estado.ocultas.includes(i);
  });
}
function mostrarPregunta() {
  const p = estado.preguntas[estado.indiceActual];
  $("#num").textContent = `Pregunta ${estado.indiceActual + 1}/${TOTAL}`;
  $("#progreso").value = estado.indiceActual + 1;
  $("#enunciado").textContent = p.enunciado;
  const cont = $("#opciones");
  cont.replaceChildren();
  p.opciones.forEach((t, i) => {
    const b = document.createElement("button");
    b.className = "btn opcion";
    b.dataset.i = i;
    b.textContent = `${"ABCD"[i]} · ${t}`;
    cont.append(b);
  });
  $("#feedback").hidden = true;
  actualizarPuntaje();
  actualizarTiempo();
  actualizarComodines();
}
/* Retroalimentación (P5): color + texto, opciones bloqueadas y explicación */
function mostrarFeedback(elegida, ok, ganado) {
  const p = estado.preguntas[estado.indiceActual];
  document.querySelectorAll("#opciones .opcion").forEach((b, i) => {
    b.disabled = true;
    if (i === p.correcta) {
      b.classList.add("correcta");
      b.textContent += " [Correcta]";
    } else if (i === elegida) {
      b.classList.add("incorrecta");
      b.textContent += " [Tu respuesta: incorrecta]";
    }
  });
  $("#estado").textContent = ok
    ? `¡Correcto! +${ganado} puntos`
    : elegida === -1
      ? "Tiempo agotado. 0 puntos"
      : "Incorrecto. 0 puntos";
  $("#explicacion").textContent = p.explicacion;
  const sig = $("#btn-siguiente");
  sig.textContent =
    estado.indiceActual === TOTAL - 1 ? "Ver resultado" : "Siguiente pregunta";
  $("#feedback").hidden = false;
  actualizarPuntaje();
  actualizarComodines();
  sonar(ok);
  sig.focus();
}
function mostrarResultado(pos) {
  mostrar("resultado");
  $("#r-puntaje").textContent = estado.puntaje;
  $("#r-aciertos").textContent = `${estado.aciertos} / ${TOTAL}`;
  $("#r-tiempo").textContent = fmt(estado.tiempoUsado);
  $("#r-pos").textContent = pos ? `#${pos}` : "Fuera del top 10";
  const a = estado.aciertos;
  $("#r-mensaje").textContent =
    a >= 9
      ? "¡Excelente! Eres un experto en Colombia."
      : a >= 6
        ? "¡Muy bien! Sigue así."
        : a >= 3
          ? "Vas por buen camino, sigue practicando."
          : "No te rindas, inténtalo de nuevo.";
  const ul = $("#r-revision");
  ul.replaceChildren();
  const falladas = estado.respuestas.filter((r) => !r.ok);
  if (!falladas.length) {
    const li = document.createElement("li");
    li.textContent = "¡No fallaste ninguna!";
    ul.append(li);
  }
  falladas.forEach((r) => {
    const li = document.createElement("li"),
      p = r.pregunta;
    li.textContent = `${p.enunciado} Tu respuesta: ${r.elegida < 0 ? "sin responder" : p.opciones[r.elegida]}. Correcta: ${p.opciones[p.correcta]}. ${p.explicacion}`;
    ul.append(li);
  });
}
function renderConfig(sel) {
  marcar("#cats", "data-cat", sel.cat);
  marcar("#difs", "data-dif", sel.dif);
  const m = mejorPuntaje(obtenerPrefs().nombre, sel.cat, sel.dif);
  $("#mejor").textContent =
    `Tu mejor puntaje en esta combinación: ${m ? m : "0 (sin partidas)"}`;
}
function renderRanking() {
  const r = obtenerRanking(),
    tb = $("#filas");
  tb.replaceChildren();
  r.forEach((e, i) => {
    const tr = document.createElement("tr");
    [i + 1, e.nombre, e.puntaje, e.categoria, e.fecha].forEach((v, k) => {
      const td = document.createElement("td");
      td.textContent = v;
      if (k > 2) td.className = "extra";
      tr.append(td);
    });
    tb.append(tr);
  });
  $("#vacio").hidden = r.length > 0;
  document.querySelector("#ranking table").hidden = !r.length;
  const s = obtenerStats();
  let mejorCat = "—",
    mr = -1;
  Object.entries(s.cats).forEach(([c, v]) => {
    if (v.a / v.t > mr) {
      mr = v.a / v.t;
      mejorCat = NOMBRES[c];
    }
  });
  const datos = [
    ["Partidas jugadas", s.partidas],
    [
      "% de aciertos",
      s.preguntas ? Math.round((100 * s.aciertos) / s.preguntas) + "%" : "0%",
    ],
    ["Mejor puntaje", s.mejor],
    ["Mejor categoría", mejorCat],
  ];
  $("#stats").replaceChildren(
    ...datos.map(([k, v]) => {
      const d = document.createElement("div");
      d.className = "caja";
      d.textContent = `${k}: `;
      const b = document.createElement("b");
      b.textContent = v;
      d.append(b);
      return d;
    }),
  );
}
function renderAjustes() {
  const p = obtenerPrefs();
  marcar("#ops-sonido", "data-sonido", p.sonido ? 1 : 0);
  marcar("#ops-musica", "data-musica", p.musica ? 1 : 0);
  marcar("#ops-tema", "data-tema", p.tema);
}

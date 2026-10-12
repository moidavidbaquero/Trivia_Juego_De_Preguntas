/* Ranking, estadísticas y preferencias con localStorage */
const CLAVES = {
  ranking: "trivia_ranking",
  stats: "trivia_stats",
  prefs: "trivia_prefs",
};
function leer(c, d) {
  try {
    const v = localStorage.getItem(c);
    return v ? JSON.parse(v) : d;
  } catch (e) {
    return d;
  }
}
function escribir(c, v) {
  try {
    localStorage.setItem(c, JSON.stringify(v));
  } catch (e) {
    /* almacenamiento no disponible */
  }
}
function obtenerRanking() {
  return leer(CLAVES.ranking, []);
}
/* Agrega la partida, ordena de mayor a menor y conserva el top 10. Devuelve la posición (o null) */
function guardarEnRanking(partida) {
  const r = obtenerRanking();
  r.push(partida);
  r.sort((a, b) => b.puntaje - a.puntaje);
  const pos = r.indexOf(partida) + 1;
  escribir(CLAVES.ranking, r.slice(0, 10));
  return pos <= 10 ? pos : null;
}
function borrarRanking() {
  try {
    localStorage.removeItem(CLAVES.ranking);
  } catch (e) {}
}
function obtenerStats() {
  return leer(CLAVES.stats, {
    partidas: 0,
    preguntas: 0,
    aciertos: 0,
    mejor: 0,
    cats: {},
    mejores: {},
  });
}
function claveMejor(n, c, d) {
  return `${n.toLowerCase()}|${c}|${d}`;
}
function actualizarStats(e) {
  const s = obtenerStats();
  s.partidas++;
  e.respuestas.forEach((r) => {
    const c = (s.cats[r.pregunta.categoria] = s.cats[r.pregunta.categoria] || {
      a: 0,
      t: 0,
    });
    s.preguntas++;
    c.t++;
    if (r.ok) {
      s.aciertos++;
      c.a++;
    }
  });
  s.mejor = Math.max(s.mejor, e.puntaje);
  const k = claveMejor(e.jugador, e.categoria, e.dificultad);
  s.mejores[k] = Math.max(s.mejores[k] || 0, e.puntaje);
  escribir(CLAVES.stats, s);
}
function mejorPuntaje(n, c, d) {
  return obtenerStats().mejores[claveMejor(n, c, d)] || 0;
}
function obtenerPrefs() {
  return Object.assign(
    { sonido: true, musica: true, tema: "claro", nombre: "" },
    leer(CLAVES.prefs, {}),
  );
}
function guardarPrefs(cambios) {
  escribir(CLAVES.prefs, Object.assign(obtenerPrefs(), cambios));
}

/* Lógica del juego: preguntas, temporizador, validación y puntaje */
const TIEMPO = 20,
  TOTAL = 10,
  MULT = { facil: 1, medio: 1.5, dificil: 2 };
const estado = {};
let reloj = null;

/* Fisher-Yates: devuelve una copia ordenada al azar */
function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/* Filtra el banco, mezcla y devuelve 10 preguntas con opciones mezcladas.
   Si no alcanzan, completa con la misma categoría y luego con el resto del banco. */
function obtenerPreguntas(cat, dif) {
  const okCat = (p) => cat === "todas" || p.categoria === cat;
  let lista = mezclar(
    PREGUNTAS.filter((p) => okCat(p) && p.dificultad === dif),
  );
  if (lista.length < TOTAL) {
    const resto = PREGUNTAS.filter((p) => !lista.includes(p));
    lista = lista.concat(
      mezclar(resto.filter(okCat)),
      mezclar(resto.filter((p) => !okCat(p))),
    );
  }
  return lista.slice(0, TOTAL).map((p) => {
    const m = mezclar(p.opciones.map((t, i) => ({ t, ok: i === p.correcta })));
    return {
      ...p,
      opciones: m.map((o) => o.t),
      correcta: m.findIndex((o) => o.ok),
    };
  });
}
function iniciarPartida(jugador, categoria, dificultad) {
  Object.assign(estado, {
    jugador,
    categoria,
    dificultad,
    preguntas: obtenerPreguntas(categoria, dificultad),
    indiceActual: 0,
    aciertos: 0,
    racha: 0,
    puntaje: 0,
    tiempoRestante: TIEMPO,
    limite: TIEMPO,
    tiempoUsado: 0,
    comodines: { cincuenta: true, tiempo: true },
    respondida: false,
    ocultas: [],
    respuestas: [],
  });
  mostrar("juego");
  mostrarPregunta();
  iniciarTemporizador();
}
function detenerJuego() {
  clearInterval(reloj);
  reloj = null;
}
/* Cuenta regresiva con setInterval; al llegar a 0 cuenta como incorrecta */
function iniciarTemporizador() {
  detenerJuego();
  reloj = setInterval(() => {
    estado.tiempoRestante--;
    actualizarTiempo();
    if (estado.tiempoRestante <= 0) responder(-1);
  }, 1000);
}
/* Valida la respuesta (-1 = tiempo agotado) y calcula el puntaje según la sección 6.1 */
function responder(i) {
  if (estado.respondida) return;
  estado.respondida = true;
  detenerJuego();
  const p = estado.preguntas[estado.indiceActual],
    ok = i === p.correcta;
  let ganado = 0;
  estado.tiempoUsado += estado.limite - Math.max(0, estado.tiempoRestante);
  if (ok) {
    estado.aciertos++;
    estado.racha++;
    const base = 100 + Math.min(5 * estado.tiempoRestante, 100);
    const racha = estado.racha % 3 === 0 ? 50 : 0; // +50 en la 3.ª, 6.ª y 9.ª seguidas
    ganado = Math.round((base + racha) * MULT[estado.dificultad]);
    estado.puntaje += ganado;
  } else estado.racha = 0;
  estado.respuestas.push({ pregunta: p, elegida: i, ok });
  mostrarFeedback(i, ok, ganado);
}
function siguientePregunta() {
  estado.indiceActual++;
  if (estado.indiceActual >= TOTAL) return finalizarPartida();
  Object.assign(estado, {
    tiempoRestante: TIEMPO,
    limite: TIEMPO,
    respondida: false,
    ocultas: [],
  });
  mostrarPregunta();
  iniciarTemporizador();
}
/* Comodines: cada uno una vez por partida, resta 30 puntos (sin bajar de 0) */
function usarComodin(tipo) {
  if (estado.respondida || !estado.comodines[tipo]) return;
  estado.comodines[tipo] = false;
  estado.puntaje = Math.max(0, estado.puntaje - 30);
  if (tipo === "cincuenta") {
    const p = estado.preguntas[estado.indiceActual];
    estado.ocultas = mezclar(
      p.opciones.map((_, i) => i).filter((i) => i !== p.correcta),
    ).slice(0, 2);
    ocultarOpciones();
  } else {
    estado.tiempoRestante += 10;
    estado.limite += 10;
    actualizarTiempo();
  }
  actualizarPuntaje();
  actualizarComodines();
}
function finalizarPartida() {
  detenerJuego();
  const entrada = {
    nombre: estado.jugador,
    puntaje: estado.puntaje,
    categoria: NOMBRES[estado.categoria],
    dificultad: estado.dificultad,
    fecha: new Date().toLocaleDateString("es-CO"),
  };
  const pos = guardarEnRanking(entrada);
  actualizarStats(estado);
  mostrarResultado(pos);
}

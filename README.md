# Trivia Colombia – Juego de Preguntas

<p align="center"><img src="assets/img/logo.svg" alt="Logo de Trivia Colombia" width="140"></p>

Juego web de preguntas y respuestas sobre Colombia, desarrollado con **HTML5, CSS3 y JavaScript (ES6+)**. El jugador escribe su nombre, elige una categoría y una dificultad, y responde una ronda de 10 preguntas de selección múltiple con tiempo límite. Al final, el resultado se guarda en un ranking local.

| Dato            | Información                     |
| --------------- | ------------------------------- |
| **Autor**       | **Moises David Baquero Daza**   |
| Institución     | Universidad de Santander (UDES) |
| Asignatura      | Desarrollo Full Stack           |
| Docente         | Carlos Carrascal                |
| Tipo de entrega | Parcial basado en proyecto      |
| Fecha           | Octubre de 2026                 |

## Enlaces

- Diseño en Figma / MockFlow: _pendiente_
- Despliegue en Vercel: _pendiente_
- Video explicativo (máx. 5 min): _pendiente_

## Características

- 5 categorías (Geografía, Historia, Cultura y Tradiciones, Deportes, Ciencia y Naturaleza) más la opción «Todas», y 3 niveles: fácil, medio y difícil.
- Banco de **150 preguntas**: 10 por cada combinación de categoría y nivel, con 4 opciones, respuesta correcta y explicación.
- 10 preguntas aleatorias por partida, sin repetir, con las opciones también mezcladas (algoritmo Fisher-Yates).
- Temporizador de 20 segundos por pregunta.
- Retroalimentación inmediata: opción correcta e incorrecta marcadas con color y con texto, y una breve explicación.
- Comodines (uno de cada uno por partida): **50/50** y **tiempo extra (+10 s)**.
- Resumen final con puntaje, aciertos, tiempo empleado, posición en el ranking y revisión de las preguntas falladas.
- Ranking local (top 10) y estadísticas del jugador, con opción de borrar el ranking.
- Ajustes: efectos de sonido, **música de fondo** y tema claro/oscuro.
- Diseño responsive (desde 360 px hasta escritorio) y accesible (botones de 44 px o más, uso con teclado, contraste adecuado, textos alternativos).

## Reglas y puntuación

| Concepto                                 | Puntos                                     |
| ---------------------------------------- | ------------------------------------------ |
| Respuesta correcta                       | +100                                       |
| Bonificación por rapidez                 | +5 por cada segundo restante (máximo +100) |
| Racha de 3 respuestas correctas seguidas | +50 adicionales (en la 3.ª, 6.ª y 9.ª)     |
| Respuesta incorrecta o sin responder     | 0                                          |
| Uso de un comodín                        | −30 (el puntaje no baja de 0)              |
| Multiplicador por dificultad             | Fácil x1, Medio x1.5, Difícil x2           |

## Capturas de pantalla

Todas las imágenes se guardan en `docs/diseno/`.

### Diseño (Figma / MockFlow)

| Qué muestra                                                                 | Archivo                                       |
| --------------------------------------------------------------------------- | --------------------------------------------- |
| Guía de estilos (paleta, tipografías, tamaños y estados de los botones)     | `docs/diseno/diseno-guia-estilos.png`         |
| Wireframe P1 · Inicio                                                       | `docs/diseno/wireframe-p1-inicio.png`         |
| Wireframe P2 · Instrucciones                                                | `docs/diseno/wireframe-p2-instrucciones.png`  |
| Wireframe P3 · Configuración de partida                                     | `docs/diseno/wireframe-p3-configuracion.png`  |
| Wireframe P4 y P5 · Juego y retroalimentación                               | `docs/diseno/wireframe-p4-p5-juego.png`       |
| Wireframe P6 · Resultado                                                    | `docs/diseno/wireframe-p6-resultado.png`      |
| Wireframe P7 · Ranking y estadísticas                                       | `docs/diseno/wireframe-p7-ranking.png`        |
| Wireframe P8 · Ajustes                                                      | `docs/diseno/wireframe-p8-ajustes.png`        |
| Mockup de alta fidelidad P1 · Inicio (escritorio y móvil)                   | `docs/diseno/mockup-p1-inicio.png`            |
| Mockup de alta fidelidad P2 · Instrucciones (escritorio y móvil)            | `docs/diseno/mockup-p2-instrucciones.png`     |
| Mockup de alta fidelidad P3 · Configuración de partida (escritorio y móvil) | `docs/diseno/mockup-p3-configuracion.png`     |
| Mockup de alta fidelidad P4 · Juego (escritorio y móvil)                    | `docs/diseno/mockup-p4-juego.png`             |
| Mockup de alta fidelidad P5 · Retroalimentación (escritorio y móvil)        | `docs/diseno/mockup-p5-retroalimentacion.png` |
| Mockup de alta fidelidad P6 · Resultado (escritorio y móvil)                | `docs/diseno/mockup-p6-resultado.png`         |
| Mockup de alta fidelidad P7 · Ranking y estadísticas (escritorio y móvil)   | `docs/diseno/mockup-p7-ranking.png`           |
| Mockup de alta fidelidad P8 · Ajustes (escritorio y móvil)                  | `docs/diseno/mockup-p8-ajustes.png`           |
| Prototipo navegable (pantallas conectadas)                                  | `docs/diseno/diseno-prototipo.png`            |

![Guía de estilos](docs/diseno/diseno-guia-estilos.png)
![Wireframe P1 · Inicio](docs/diseno/wireframe-p1-inicio.png)
![Wireframe P2 · Instrucciones](docs/diseno/wireframe-p2-instrucciones.png)
![Wireframe P3 · Configuración de partida](docs/diseno/wireframe-p3-configuracion.png)
![Wireframe P4 y P5 · Juego y retroalimentación](docs/diseno/wireframe-p4-p5-juego.png)
![Wireframe P6 · Resultado](docs/diseno/wireframe-p6-resultado.png)
![Wireframe P7 · Ranking y estadísticas](docs/diseno/wireframe-p7-ranking.png)
![Wireframe P8 · Ajustes](docs/diseno/wireframe-p8-ajustes.png)
![Mockup P1 · Inicio](docs/diseno/mockup-p1-inicio.png)
![Mockup P2 · Instrucciones](docs/diseno/mockup-p2-instrucciones.png)
![Mockup P3 · Configuración de partida](docs/diseno/mockup-p3-configuracion.png)
![Mockup P4 · Juego](docs/diseno/mockup-p4-juego.png)
![Mockup P5 · Retroalimentación](docs/diseno/mockup-p5-retroalimentacion.png)
![Mockup P6 · Resultado](docs/diseno/mockup-p6-resultado.png)
![Mockup P7 · Ranking y estadísticas](docs/diseno/mockup-p7-ranking.png)
![Mockup P8 · Ajustes](docs/diseno/mockup-p8-ajustes.png)
![Prototipo navegable](docs/diseno/diseno-prototipo.png)

### Aplicación terminada

| Pantalla                 | Archivo                                    |
| ------------------------ | ------------------------------------------ |
| Inicio                   | `docs/diseno/app-01-inicio.png`            |
| Instrucciones            | `docs/diseno/app-02-instrucciones.png`     |
| Configuración de partida | `docs/diseno/app-03-configuracion.png`     |
| Juego                    | `docs/diseno/app-04-juego.png`             |
| Retroalimentación        | `docs/diseno/app-05-retroalimentacion.png` |
| Resultado                | `docs/diseno/app-06-resultado.png`         |
| Ranking y estadísticas   | `docs/diseno/app-07-ranking.png`           |
| Ajustes                  | `docs/diseno/app-08-ajustes.png`           |
| Vista móvil a 360 px     | `docs/diseno/app-09-movil-360.png`         |
| Tema oscuro              | `docs/diseno/app-10-tema-oscuro.png`       |

![Inicio](docs/diseno/app-01-inicio.png)
![Instrucciones](docs/diseno/app-02-instrucciones.png)
![Configuración de partida](docs/diseno/app-03-configuracion.png)
![Juego](docs/diseno/app-04-juego.png)
![Retroalimentación](docs/diseno/app-05-retroalimentacion.png)
![Resultado](docs/diseno/app-06-resultado.png)
![Ranking y estadísticas](docs/diseno/app-07-ranking.png)
![Ajustes](docs/diseno/app-08-ajustes.png)
![Vista móvil a 360 px](docs/diseno/app-09-movil-360.png)
![Tema oscuro](docs/diseno/app-10-tema-oscuro.png)

## Tecnologías

HTML5 · CSS3 (Flexbox, Grid, variables, media queries, animaciones) · JavaScript ES6+ · localStorage · Web Audio API · Git y GitHub · Vercel · Visual Studio Code (Live Server).

## Estructura del proyecto

```
trivia-colombia/
├── index.html              → Estructura de todas las pantallas
├── css/
│   ├── styles.css          → Estilos generales y variables
│   └── responsive.css      → Media queries
├── js/
│   ├── app.js              → Punto de entrada y navegación
│   ├── juego.js            → Lógica: preguntas, tiempo, puntaje
│   ├── preguntas.js        → Banco de preguntas
│   ├── ui.js               → Renderizado de pantallas y audio
│   └── almacenamiento.js   → Ranking y estadísticas (localStorage)
├── assets/
│   ├── img/                → Logo e íconos
│   └── sonidos/            → Reservada para audios (el audio se genera por código)
├── docs/diseno/            → Capturas o PDF del diseño
└── README.md
```

## Ejecutar localmente

1. Clonar el repositorio: `git clone https://github.com/usuario/trivia-colombia.git`
2. Abrir la carpeta en Visual Studio Code.
3. Instalar la extensión **Live Server** y hacer clic en «Go Live» sobre `index.html` (también funciona abriendo `index.html` directamente en el navegador).

No requiere servidor, base de datos ni instalación de dependencias.

## Datos guardados (localStorage)

- `trivia_ranking`: arreglo con `{ nombre, puntaje, categoria, dificultad, fecha }` (top 10).
- `trivia_stats`: partidas jugadas, aciertos, mejor puntaje y desempeño por categoría.
- `trivia_prefs`: nombre del jugador, efectos de sonido, música y tema.

## Audio

Los efectos y la música de fondo se generan con la **Web Audio API**: es una melodía original, suave y sin derechos de autor. Los navegadores solo permiten reproducir audio tras una interacción del usuario, por lo que la música empieza con el primer clic. Se puede desactivar en **Ajustes**.

## Pruebas realizadas

Se verifican los casos del plan de pruebas del parcial (CP-01 a CP-13): nombre vacío, 10 preguntas distintas por filtro, orden aleatorio, cálculo de puntaje, bloqueo de opciones, comodines, racha, ranking, persistencia al recargar, fidelidad al diseño y vista a 360 px.

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) elegir **Add New → Project** e importar el repositorio.
3. Dejar el preset **Other** (sitio estático, sin comando de build) y pulsar **Deploy**.
4. Cada `git push` a la rama principal actualiza el sitio automáticamente.

## Mejoras futuras

Backend con API y base de datos para un ranking compartido, registro e inicio de sesión, panel para que el docente edite preguntas, retos diarios y conversión a PWA.

## Autor

**Moises David Baquero Daza** – Estudiante de la Universidad de Santander (UDES), asignatura Desarrollo Full Stack.

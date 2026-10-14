# Trivia Colombia – Juego de Preguntas

<p align="center"><img src="assets/img/logo.svg" alt="Logo de Trivia Colombia" width="140"></p>

Juego web de preguntas y respuestas sobre Colombia, desarrollado con **HTML5, CSS3 y JavaScript (ES6+)**. El jugador escribe su nombre, elige una categoría y una dificultad, y responde una ronda de 10 preguntas de selección múltiple con tiempo límite. Al final, el resultado se guarda en un ranking local.

| Dato            | Información                     |
| --------------- | ------------------------------- |
|  **Autores**    | **Moises David Baquero Daza**   |
|                 | **David Santiago Vargas Parra** |
| Institución     | Universidad de Santander (UDES) |
| Asignatura      | Desarrollo Full Stack           |
| Docente         | Carlos Carrascal                |
| Tipo de entrega | Parcial basado en proyecto      |
| Fecha           | Octubre de 2026                 |

## Enlaces

- Diseño en MockFlow: https://app.mockflow.com/iview/M2f692c9ed99b4ee5b3ecd1d915a88a711791753924796
- Despliegue en Vercel: https://trivia-gamma-one.vercel.app/
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

## Diseño

El diseño de la interfaz se elaboró antes del código, a partir de wireframes de baja fidelidad, y se aplicó de forma consistente en el desarrollo. Está en `docs/diseno/` y comprende:

- **Guía de estilos:** paleta inspirada en la bandera de Colombia (azul `#003893`, amarillo `#FCD116`, rojo `#CE1126` y verde `#2E9E5B`), tipografía Poppins, botones de al menos 44 px de alto con esquinas redondeadas y sus estados (normal, hover, seleccionado, correcto, incorrecto y deshabilitado).
- **Wireframes de baja fidelidad:** 7 láminas en escala de grises (P1 a P8, con Juego y Retroalimentación en una sola lámina), en versión escritorio y móvil.
- **Mockups de alta fidelidad:** 8 pantallas (P1 a P8), en versión escritorio y móvil.
- **Prototipo navegable:** recorrido de las pantallas conectadas, desde el inicio hasta el resultado.

## Capturas de pantalla

Todas las imágenes se guardan en `docs/diseno/`.

### Diseño (MockFlow)

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
| Prototipo navegable (recorrido en móvil)                                    | `docs/diseno/diseno-prototipo.png`            |

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

## Prototipo Navegable
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
├── docs/
│   └── diseno/             → Guía de estilos, wireframes, mockups, prototipo y capturas
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

## Plan de pruebas

Casos de prueba del parcial (CP-01 a CP-13). Se marca el resultado después de ejecutar cada caso en el juego desplegado.

| ID    | Caso de prueba                                     | Resultado esperado                                                        | Estado        |
| ----- | -------------------------------------------------- | ------------------------------------------------------------------------- | ------------- |
| CP-01 | Intentar iniciar sin escribir el nombre            | Se muestra un mensaje y no se avanza                                      | Verificado    |
| CP-02 | Iniciar una partida de Historia en nivel fácil     | Aparecen 10 preguntas distintas de esa categoría y nivel                  | Verificado    |
| CP-03 | Jugar dos partidas seguidas con los mismos filtros | El orden de las preguntas y de las opciones cambia                        | Verificado    |
| CP-04 | Responder correctamente con 12 segundos restantes  | Se suman 100 + 60 puntos (antes del multiplicador)                        | Verificado    |
| CP-05 | Responder incorrectamente                          | La opción se marca en rojo, la correcta en verde y aparece la explicación | Verificado    |
| CP-06 | Dejar agotar el tiempo                             | La pregunta cuenta como incorrecta con 0 puntos                           | Verificado    |
| CP-07 | Hacer clic en otra opción después de responder     | No ocurre nada: las opciones están bloqueadas                             | Verificado    |
| CP-08 | Usar el comodín 50/50                              | Desaparecen dos opciones incorrectas y el botón queda deshabilitado       | Verificado    |
| CP-09 | Acertar 3 preguntas seguidas                       | Se suma la bonificación de racha de +50                                   | Verificado    |
| CP-10 | Terminar una partida                               | Se muestra el resumen y el puntaje aparece en el ranking                  | Verificado    |
| CP-11 | Recargar la página                                 | El ranking y las estadísticas se conservan                                | Verificado    |
| CP-12 | Comparar la aplicación con el diseño               | Las pantallas, colores y componentes coinciden con el diseño              | Verificado    |
| CP-13 | Abrir el juego en un celular de 360 px             | Todo se ve y funciona sin desplazamiento horizontal                       | Verificado    |

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) elegir **Add New → Project** e importar el repositorio.
3. Dejar el preset **Other** (sitio estático, sin comando de build) y pulsar **Deploy**.
4. Cada `git push` a la rama principal actualiza el sitio automáticamente.

## Mejoras futuras

Backend con API y base de datos para un ranking compartido, registro e inicio de sesión, panel para que el docente edite preguntas, retos diarios y conversión a PWA.

## Autores

**Moises David Baquero Daza y David Santiago Vargas Parra** – Estudiantes de la Universidad de Santander (UDES), asignatura Desarrollo Full Stack.

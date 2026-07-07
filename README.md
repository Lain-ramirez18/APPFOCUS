# ⚡ CORE v3.0 - High Performance Productivity System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**CORE v3.0** es una terminal de productividad de alto rendimiento diseñada bajo la metodología de **Deep Work** (Trabajo Profundo). Esta aplicación permite gestionar bloques de tiempo de impacto con una interfaz futurista y minimalista, optimizada para la máxima concentración.

## 🚀 Características Destacadas

* **Gestión de Bloques Operativos:** Clasificación de tareas en *Deep Work*, *Hábitos*, *Aprendizaje* y *Operativo*.
* **Cálculo de Eficiencia Dinámico:** Algoritmo en tiempo real que mide tu rendimiento diario según los bloques completados.
* **Enfoque Local-First:** Funciona al 100% sin conexión. Privacidad absoluta y latencia cero.
* **UI de Grado Militar:** Interfaz oscura (Dark Mode) con efectos de desenfoque (Glassmorphism) y gradientes dinámicos.
* **Buscador Reactivo:** Filtrado instantáneo de la agenda mediante estados optimizados de React.

## 🛠️ Stack Tecnológico

* **Frontend Core:** React.js (Hooks avanzados: `useState`, `useMemo`, `useEffect`).
* **Styling:** Tailwind CSS para una arquitectura de diseño escalable y responsiva.
* **Icons:** Lucide React para una iconografía limpia y consistente.
* **Runtime:** Babel Standalone para ejecución inmediata en navegador sin bundlers complejos.

## 🧠 Arquitectura Modular (Clean Code)

El proyecto ha sido refactorizado siguiendo los principios de Clean Code, pasando de un archivo único ("espagueti") a una arquitectura estructurada y modular:

```text
/
├── index.html          # Estructura semántica, libre de scripts y estilos embebidos
├── css/
│   └── style.css       # Estilos globales y reglas custom (ej. custom-scrollbar)
├── js/
│   ├── components/
│   │   └── Icon.js     # Componente reutilizable para renderizar iconos
│   ├── App.js          # Lógica de negocio (estados, filtrado) y componente UI
│   └── main.js         # Punto de entrada de React (Render root)
└── README.md           # Documentación
```

## 📦 Instalación y Uso

Puedes ejecutar este proyecto localmente en menos de 10 segundos.

⚠️ **NOTA IMPORTANTE:** Debido a las políticas de seguridad (CORS) de los navegadores modernos para módulos y carga de scripts externos mediante Babel Standalone, **es necesario ejecutar un servidor local**.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Lain-ramirez18/APPFOCUS.git
    cd APPFOCUS
    ```

2.  **Ejecución con servidor local:**
    Puedes usar extensiones como "Live Server" en VSCode, o usar Python/Node:
    * Usando Python (ya instalado en la mayoría de sistemas):
      ```bash
      python -m http.server 8000
      ```
    * O con Node.js (`npx`):
      ```bash
      npx serve .
      ```

3.  **Abre en el navegador:**
    Visita `http://localhost:8000` (o el puerto que te indique tu servidor).

---
**Desarrollado por [Lain Ramirez](https://github.com/Lain-ramirez18)** *Transformando la disciplina en código.* ⚡

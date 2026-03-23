#CORE v3.0 - Sistema de Gestión de Impacto (Local First)

CORE v3.0 es una aplicación de productividad de alto rendimiento diseñada bajo la metodología de "Trabajo Profundo" (Deep Work). Esta versión ha sido optimizada para funcionar de manera totalmente local, garantizando privacidad, velocidad y disponibilidad sin necesidad de conexión a internet.

🚀 Características Principales

Gestión de Bloques de Impacto: Creación y seguimiento de tareas categorizadas (Deep Work, Hábitos, Aprendizaje).

Indicador de Eficiencia en Tiempo Real: Algoritmo dinámico que calcula tu rendimiento diario basado en los bloques completados.

Arquitectura Local-First: Implementación robusta utilizando el estado de React para una experiencia instantánea (Zero Latency).

Interfaz Futurista: Diseño UI inspirado en sistemas operativos de alto rendimiento, con modo oscuro nativo, gradientes dinámicos y animaciones fluidas.

Buscador Inteligente: Filtro reactivo para localizar bloques por nombre o categoría de manera inmediata.

🛠️ Stack Tecnológico

Frontend: React.js (Hooks, UseMemo, UseEffect).

Estilos: Tailwind CSS para un diseño responsivo y moderno.

Iconografía: Lucide React.

Renderizado: Babel Standalone (Optimizado para ejecución en entornos de cliente ligero).

🧠 Desafíos Técnicos y Aprendizajes

Este proyecto nació de la necesidad de migrar un sistema dependiente de bases de datos externas a uno autónomo y local.

Gestión de Estado: El mayor reto fue asegurar que la lógica de "Eficiencia" se mantuviera consistente sin persistencia en servidor, utilizando hooks de React para manejar cálculos derivados.

UI/UX sin librerías de componentes: Todo el diseño fue construido desde cero con Tailwind puro, evitando sobrecargar la aplicación con frameworks pesados, lo que resultó en un tiempo de carga casi nulo.

📦 Instalación y Uso

Al ser una aplicación Standalone, no requiere instalación de dependencias pesadas para pruebas rápidas.

Clona el repositorio:

git clone [https://github.com/Lain-ramirez18/APPFOCUS.git](https://github.com/Lain-ramirez18/APPFOCUS.git)


Abre el archivo index.html en cualquier navegador moderno.

🛡️ Licencia

Este proyecto es de uso personal para portafolio. Siéntete libre de inspirarte en el código.

Desarrollado por Lain Ramirez ⚡

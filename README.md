# 🏛️ Consejo de Profesionales de la Comunicación de Córdoba — Landing Page

Landing page institucional desarrollada para el **Consejo de Profesionales de la Comunicación de Córdoba**. El proyecto tiene como objetivo principal brindar legitimidad, comunicar los beneficios de la jerarquización profesional y facilitar un canal directo de contacto para la matriculación y sumatoria de profesionales en la provincia.

🌐 **Sitio Web en Vivo:** [consejo-profesionales-comunicacion-cba.vercel.app](https://consejo-profesionales-comunicacion-cba.vercel.app/)

---

## 🚀 Tecnologías Utilizadas

- **[React](https://reactjs.org/):** Librería para la construcción de la interfaz de usuario modular y reutilizable.
- **[Vite](https://vitejs.dev/):** Entorno de desarrollo rápido y empaquetador optimizado para producción.
- **CSS3 Puro:** Variables CSS, Flexbox, CSS Grid y diseño totalmente responsivo sin dependencias externas.
- **[FormSubmit](https://formsubmit.co/):** Integración serverless para el procesamiento de consultas por correo electrónico (`cordobacomunicadores@gmail.com`).
- **[Vercel](https://vercel.com/):** Plataforma de hosting y despliegue continuo vinculada al repositorio de GitHub.

---

## 🎨 Identidad Visual y UI/UX

- **Color de Fondo Principal:** `#020b18` (Azul oscuro institucional)
- **Color de Acento:** `#84C225` (Verde vibrante)
- **Tipografías:** `Montserrat` (encabezados y títulos) e `Inter` (cuerpo de texto y párrafos)
- **Navegación:** Anclas suaves con compensación de altura (`scroll-margin-top`) para la cabecera fija.

---

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── perfil-consejo.png      # Isotipo / Logo institucional
│   └── banner-consejo.png      # Banner principal del Hero
├── src/
│   ├── components/
│   │   ├── Navbar/            # Menú navegable y responsive
│   │   ├── Hero/              # Sección de impacto principal
│   │   ├── About/             # Sección "Quiénes Somos"
│   │   ├── PorqueUnConsejo/   # Grilla de beneficios e impacto
│   │   ├── Updates/           # Novedades y redes sociales
│   │   ├── Contact/           # Formulario funcional de contacto
│   │   └── Footer/            # Enlaces, derechos y marca
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos globales y variables
│   └── main.jsx               # Punto de entrada de React
├── package.json
└── README.md
⚙️ Instalación y Ejecución Local
Para ejecutar este proyecto en tu entorno local:

Clonar el repositorio:

Bash
git clone [https://github.com/Tadeo-bit/web-consejo-comunicacion-profesionales.git](https://github.com/Tadeo-bit/web-consejo-comunicacion-profesionales.git)
Navegar al directorio del proyecto:

Bash
cd web-consejo-comunicacion-profesionales
Instalar dependencias:

Bash
npm install
Iniciar el servidor de desarrollo:

Bash
npm run dev
Abrí tu navegador e ingresá a http://localhost:5173.

📦 Despliegue en Producción
El proyecto cuenta con integración continua vinculada a Vercel desde la rama main. Cada commit enviado a la rama principal dispara automáticamente una nueva versión en producción.

Para generar una compilación de producción manualmente:

Bash
npm run build
📩 Configuración del Formulario de Contacto
El formulario envía las consultas a cordobacomunicadores@gmail.com mediante FormSubmit.

Activación: La primera vez que se envía un correo desde un dominio nuevo, FormSubmit envía un email de confirmación a la casilla de destino. Es necesario abrir dicho correo y hacer clic en "Activate Form" para comenzar a recibir mensajes.

✒️ Créditos y Desarrollo
Proyecto: Consejo de Profesionales de la Comunicación de Córdoba

Desarrollo y Diseño Web: Tadeo Otaola

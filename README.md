<div align="center">
  <h1>🏛️ Consejo de Profesionales de la Comunicación de Córdoba</h1>
  <p>Landing page institucional desarrollada para brindar legitimidad, comunicar los beneficios de la jerarquización profesional y facilitar un canal directo de contacto para la matriculación de comunicadores en la Provincia de Córdoba.</p>

  <p>
    <a href="https://consejo-profesionales-comunicacion-cba.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Sitio_Web-En_Vivo-84C225?style=for-the-badge&logo=vercel&logoColor=white" alt="Sitio Web En Vivo" />
    </a>
    <a href="https://github.com/Tadeo-bit/web-consejo-comunicacion-profesionales" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-Repositorio-020b18?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
    </a>
  </p>
</div>

<hr />

<h2>🚀 Tecnologías Utilizadas</h2>

<ul>
  <li><b><a href="https://reactjs.org/">React</a>:</b> Librería para la construcción de la interfaz de usuario modular y reutilizable.</li>
  <li><b><a href="https://vitejs.dev/">Vite</a>:</b> Entorno de desarrollo rápido y empaquetador optimizado para producción.</li>
  <li><b>CSS3 Puro:</b> Variables CSS, Flexbox, CSS Grid y diseño totalmente responsivo sin dependencias externas.</li>
  <li><b><a href="https://formsubmit.co/">FormSubmit</a>:</b> Integración serverless para el procesamiento de consultas por correo electrónico (<code>cordobacomunicadores@gmail.com</code>).</li>
  <li><b><a href="https://vercel.com/">Vercel</a>:</b> Plataforma de hosting y despliegue continuo vinculada al repositorio de GitHub.</li>
</ul>

<hr />

<h2>🎨 Identidad Visual y UI/UX</h2>

<ul>
  <li><b>Color de Fondo Principal:</b> <code>#020b18</code> (Azul oscuro institucional)</li>
  <li><b>Color de Acento:</b> <code>#84C225</code> (Verde vibrante)</li>
  <li><b>Tipografías:</b> <code>Montserrat</code> (encabezados y títulos) e <code>Inter</code> (cuerpo de texto)</li>
  <li><b>Navegación:</b> Anclas suaves con compensación de altura (<code>scroll-margin-top</code>) para la cabecera fija.</li>
</ul>

<hr />

<h2>📁 Estructura del Proyecto</h2>

<pre><code>/
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
└── README.md</code></pre>

<hr />

<h2>⚙️ Instalación y Ejecución Local</h2>

<p>Para ejecutar este proyecto en tu entorno local:</p>

<ol>
  <li>
    <p><b>Clonar el repositorio:</b></p>
    <pre><code>git clone https://github.com/Tadeo-bit/web-consejo-comunicacion-profesionales.git</code></pre>
  </li>
  <li>
    <p><b>Navegar al directorio del proyecto:</b></p>
    <pre><code>cd web-consejo-comunicacion-profesionales</code></pre>
  </li>
  <li>
    <p><b>Instalar dependencias:</b></p>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <p><b>Iniciar el servidor de desarrollo:</b></p>
    <pre><code>npm run dev</code></pre>
  </li>
  <li>
    <p>Abrí tu navegador e ingresá a <code>http://localhost:5173</code>.</p>
  </li>
</ol>

<hr />

<h2>📦 Despliegue en Producción</h2>

<p>El proyecto cuenta con integración continua vinculada a <b>Vercel</b> desde la rama <code>main</code>. Cada commit enviado a la rama principal dispara automáticamente una nueva versión en producción.</p>

<p>Para generar una compilación de producción manualmente:</p>
<pre><code>npm run build</code></pre>

<hr />

<h2>📩 Configuración del Formulario de Contacto</h2>

<p>El formulario envía las consultas a <code>cordobacomunicadores@gmail.com</code> mediante FormSubmit.</p>

<blockquote>
  <p><b>Activación:</b> La primera vez que se envía un correo desde un dominio nuevo, FormSubmit envía un email de confirmación a la casilla de destino. Es necesario abrir dicho correo y hacer clic en <b>"Activate Form"</b> para comenzar a recibir mensajes.</p>
</blockquote>

<hr />

<h2>✒️ Créditos y Desarrollo</h2>

<ul>
  <li><b>Proyecto:</b> Consejo de Profesionales de la Comunicación de Córdoba</li>
  <li><b>Desarrollo y Diseño Web:</b> <a href="https://github.com/Tadeo-bit">Tadeo Otaola</a></li>
</ul>

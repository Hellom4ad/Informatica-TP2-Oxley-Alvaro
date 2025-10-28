/* === componentes-globales.js === */
console.log("Cargando definiciones de componentes globales...");

// 1. Ya NO llamamos a Vue.component().
// En su lugar, creamos una FUNCIÓN que recibe la 'app' de Vue 3.
function registrarComponentesGlobales(app) {

    // 2. Ahora registramos los componentes EN la instancia 'app'
    app.component('mi-nav', {
        
        props: ['paginaActiva'],
        template: `
            <nav>
                <ul>
                    <li>
                        <a 
                            href="index.html" 
                            :class="{ 'link-activo': paginaActiva === 'inicio' }"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a 
                            href="contacto.html" 
                            :class="{ 'link-activo': paginaActiva === 'contacto' }"
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a 
                            href="galeria.html" 
                            :class="{ 'link-activo': paginaActiva === 'galeria' }"
                        >
                            Galería
                        </a>
                    </li>
                     <li>
                        <a 
                            href="acerca-de.html" 
                            :class="{ 'link-activo': paginaActiva === 'Acerca-de' }"
                        >
                            Acerca de
                        </a>
                    </li>
                </ul>
            </nav>
        `
    });

    app.component('mi-footer', {
        template: `
            <footer style="text-align: center; padding: 1rem; border-top: 1px solid #ccc; margin-top: 2rem;">
                <p>&copy; 2025 Mi Proyecto.</p>
            </footer>
        `
    });

    app.component('theme-toggle', {
  // El 'data' de un componente SIEMPRE debe ser una función
  data() {
    return {
      isDark: false
    }
  },
  // La plantilla HTML que usará este componente
  // Usamos backticks (`) para un string multi-línea
  template: `
    <button 
      @click="toggleTheme"
      class="bg-[var(--surface-color)] text-[var(--text-color)] border border-[var(--surface-color)] py-3 px-6 rounded-lg cursor-pointer font-medium transition-all duration-200 ease-in-out ml-4 hover:bg-[var(--brand-color)] hover:text-white">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  `,
  methods: {
    toggleTheme() {
      // 1. Cambiamos nuestro estado interno
      this.isDark = !this.isDark;
      
      // 2. Guardamos en localStorage
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      
      // 3. Aplicamos la clase al <div> raíz de la app
      // Usamos document.querySelector('#app') o document.documentElement
      document.getElementById('app').classList.toggle('dark', this.isDark);
    }
  },
  // Esto se ejecuta cuando el componente se "monta"
  mounted() {
    // Leemos la preferencia guardada al cargar
    this.isDark = localStorage.getItem('theme') === 'dark';
    
    // Aplicamos el tema inicial al <div> raíz
    document.getElementById('app').classList.toggle('dark', this.isDark);
  }
});

}
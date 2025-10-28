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

    
}
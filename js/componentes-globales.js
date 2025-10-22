/* === global-components.js === */

console.log("Cargando global-components.js...");

// Componente Navbar
Vue.component('mi-nav', {
    // 1. Declaramos la 'prop' que el componente espera recibir.
    // Es como un argumento que le pasas al componente desde el HTML.
    props: ['paginaActiva'],

    // 2. El template usa esta prop para decidir qué enlace marcar como "activo".
    template: `
        <nav>
            <ul>
                <li>
                    <a 
                        href="index.html" 
                        v-bind:class="{ 'link-activo': paginaActiva === 'inicio' }"
                    >
                        Inicio
                    </a>
                </li>
                <li>
                    <a 
                        href="contacto.html" 
                        v-bind:class="{ 'link-activo': paginaActiva === 'contacto' }"
                    >
                        Contacto
                    </a>
                </li>
                <li>
                    <a 
                        href="galeria.html" 
                        v-bind:class="{ 'link-activo': paginaActiva === 'galeria' }"
                    >
                        Galería
                    </a>
                </li>
            </ul>
        </nav>
    `
    // Nota: "v-bind:class" también se puede escribir como ":class"
    // { 'link-activo': ... } significa: "Añade la clase 'link-activo' 
    // SI la condición (paginaActiva === 'inicio') es verdadera."
});


// Componente Footer (para completar el ejemplo)
Vue.component('mi-footer', {
    template: `
        <footer style="text-align: center; padding: 1rem; border-top: 1px solid #ccc; margin-top: 2rem;">
            <p>&copy; 2025 Mi Proyecto.</p>
        </footer>
    `
});
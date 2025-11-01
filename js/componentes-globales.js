/* === componentes-globales.js === */
console.log("Cargando definiciones de componentes globales...");

// 1. Ya NO llamamos a Vue.component().
// En su lugar, creamos una FUNCIÓN que recibe la 'app' de Vue 3.
function registrarComponentesGlobales(app) {

    app.component('mi-nav', {
        props: ['paginaActiva'],
        
        data() {
            return {
                menuAbierto: false,
                // 1. AÑADIMOS UNA VARIABLE PARA SABER SI ES MÓVIL
                isMobile: false 
            }
        },
        
        methods: {
            toggleMenu() {
                this.menuAbierto = !this.menuAbierto;
            },
            
            // 2. AÑADIMOS UN MÉTODO PARA ACTUALIZAR 'isMobile'
            //    (768px es el breakpoint 'md' de Tailwind)
            checkScreen() {
                this.isMobile = window.innerWidth < 768;
                // Si la pantalla es grande, nos aseguramos que el menú no quede 'abierto'
                if (!this.isMobile) {
                    this.menuAbierto = false;
                }
            }
        },

        // 3. AÑADIMOS HOOKS DE CICLO DE VIDA
        // Se ejecutan cuando el componente se crea y se destruye
        mounted() {
            this.checkScreen(); // Revisa el tamaño al cargar
            window.addEventListener('resize', this.checkScreen); // Revisa al cambiar tamaño
        },
        unmounted() { 
            // Limpiamos el 'listener' cuando el componente se destruye
            window.removeEventListener('resize', this.checkScreen);
        },

        // 4. MODIFICAMOS EL TEMPLATE
        template: `
            <nav class="bg-gray-100 p-4 relative flex justify-between items-center">
                
                <div class="text-lg font-bold">
                    Mi Proyecto
                </div>

                <button @click="toggleMenu" class="md:hidden p-2 text-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <ul 
                    class="flex-col absolute top-16 left-0 w-full bg-gray-100 p-4 gap-4
                           md:flex md:flex-row md:static md:w-auto md:bg-transparent md:p-0 md:gap-6"
                    
                    :style="isMobile && !menuAbierto ? 'display: none;' : ''" 
                >
                    <li>
                        <a href="index.html" :class="{ 'link-activo': paginaActiva === 'inicio' }" class="font-bold text-gray-700">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="contacto.html" :class="{ 'link-activo': paginaActiva === 'contacto' }" class="font-bold text-gray-700">
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a href="galeria.html" :class="{ 'link-activo': paginaActiva === 'galeria' }" class="font-bold text-gray-700">
                            Galería
                        </a>
                    </li>
                     <li>
                        <a href="acerca-de.html" :class="{ 'link-activo': paginaActiva === 'Acerca-de' }" class="font-bold text-gray-700">
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
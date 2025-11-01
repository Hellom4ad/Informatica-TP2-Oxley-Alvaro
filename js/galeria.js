/* === js/galeria.js === */

// 1. Define los datos de la galería
const datosGaleria = {
    data() {
        return {
            terminoBusqueda: '', // Para guardar el texto del input
            obras: [
                {
                    id: 1,
                    titulo: 'Pesadilla de los injustos',
                    img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/11131.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 2,
                    titulo: 'La siesta',
                    img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/11513.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 3,
                    titulo: 'Primeros pasos',
                    img: 'https://www.bellasartes.gob.ar/media/thumbs/uploads/coleccion/i7RMvoCqcaPr.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 4,
                    titulo: 'Figura de niña',
                    img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/6479.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 5,
                    titulo: 'Cristo en el departamento',
                    img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/11514.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 6,
                    titulo: 'Juanito Laguna aprende a leer',
                    img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/7164.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 7,
                    titulo: 'El tanque blanco',
                    img: 'https://www.bellasartes.gob.ar/media/thumbs/uploads/coleccion/XOZX8Op-lLrF.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                }
            ]
        }
    },

    computed: {
        // Esta función crea una nueva lista (obrasFiltradas)
        // CADA VEZ que 'terminoBusqueda' o 'obras' cambien.
        obrasFiltradas() {
            // 1. Normalizamos el término de búsqueda (minúsculas, sin espacios extra)
            const busqueda = this.terminoBusqueda.toLowerCase().trim();

            // 2. Si la búsqueda está vacía, mostramos todas las obras
            if (!busqueda) {
                return this.obras;
            }

            // 3. Si hay búsqueda, filtramos el array
            return this.obras.filter(obra => {
                // Normalizamos el título de la obra
                const titulo = obra.titulo.toLowerCase();

                // 4. LA LÓGICA DE BÚSQUEDA (reemplazando .includes())
                // .indexOf(busqueda) devuelve -1 si NO encuentra el texto.
                // Por lo tanto, si es DIFERENTE de -1, ¡significa que SÍ lo encontró!
                return titulo.indexOf(busqueda) !== -1;
            });
        }
    },
    
    // 2. Registra el componente LOCAL (solo existe para esta página)
    components: {
        'galeria-item': {
            // 2a. Definimos las 'props' que recibirá el componente
            props: ['obra'], 
            
            // 2b. Esta es la plantilla HTML del <article> que identificaste
            //     Usamos :src, :alt y {{ }} para usar los datos de la prop 'obra'
            template: `
                <article class="gallery-item overflow-hidden grid grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)]">
                    <img 
                        :src="obra.img" 
                        :alt="obra.titulo"
                        class="w-full h-full object-cover col-[1/-1] row-[1/-1]"
                    >
                    <section class="caption col-[1/-1] row-[1/-1] self-end z-10 pt-[3em] pr-[15%] pb-[1em] pl-[1em] text-white text-sm leading-tight bg-[linear-gradient(transparent_25%,rgb(0_0_0/0.75))]">
                        <h3 class="text-[1.0625rem]">{{ obra.titulo }}</h3>
                        <p class="truncate">{{ obra.desc }}</p>
                    </section>
                </article>
            `
        }
    }
};

// 3. CREAR la app usando la data y componentes definidos arriba
const app = Vue.createApp(datosGaleria);

// 4. REGISTRAR los componentes globales (nav, footer)
registrarComponentesGlobales(app);

// 5. MONTAR la app en el HTML.
app.mount('#app');
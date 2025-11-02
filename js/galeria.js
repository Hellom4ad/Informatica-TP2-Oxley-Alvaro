const datosGaleria = {
    data() {
        return {
            terminoBusqueda: '',
            // Usamos la variable global del nuevo archivo
            obras: todasLasObras 
        }
    },

   computed: {
        // ... tu lógica de 'obrasFiltradas' (sin cambios) ...
        obrasFiltradas() {
            const busqueda = this.terminoBusqueda.toLowerCase().trim();
            if (!busqueda) {
                return this.obras;
            }
            return this.obras.filter(obra => {
                const titulo = obra.titulo.toLowerCase();
                if (busqueda.length > titulo.length) return false;
                for (let i = 0; i <= titulo.length - busqueda.length; i++) {
                    let match = true;
                    for (let j = 0; j < busqueda.length; j++) {
                        if (titulo[i + j] !== busqueda[j]) {
                            match = false;
                            break;
                        }
                    }
                    if (match) return true;
                }
                return false; 
            });
        }
    },
    
    components: {
        'galeria-item': {
            props: ['obra'], 
            
            // --- CAMBIO AQUÍ ---
            // 1. Envolvemos todo en una etiqueta <a>
            // 2. Usamos 'v-bind:href' (o :href) para crear el enlace dinámico
            template: `
                <a :href="'obra.html?id=' + obra.id" class="block">
                    <article class="gallery-item overflow-hidden grid grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] h-full">
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
                </a>
            `
            // --- FIN DEL CAMBIO ---
        }
    }
};

// 3. CREAR la app
const app = Vue.createApp(datosGaleria);

// 4. REGISTRAR los componentes globales
registrarComponentesGlobales(app);

// 5. MONTAR la app
app.mount('#app');
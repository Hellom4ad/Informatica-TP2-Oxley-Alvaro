
console.log("Cargando lógica de obra...");

// 1. LEER EL ID DE LA URL
const urlParams = new URLSearchParams(window.location.search);
const obraId = parseInt(urlParams.get('id')); // Convertimos a número

// 2. BUSCAR LA OBRA
// Usamos .find() en el array global 'todasLasObras' (de datos-obras.js)
const obraSeleccionada = todasLasObras.find(obra => obra.id === obraId);

// 3. CREAR LA APP DE VUE
const app = Vue.createApp({
    data() {
        return {
            // Pasamos la obra encontrada (o 'null' si no se encontró)
            // a la data de Vue.
            obra: obraSeleccionada 
        }
    },
    mounted() {
        // (Opcional) Si la obra no se encontró, redirigir o mostrar error
        if (!this.obra) {
            console.error('No se encontró la obra con ID:', obraId);
            // Redirigir a la galería después de 2 segundos
            setTimeout(() => {
                window.location.href = 'galeria.html';
            }, 2000);
        }
    }
});

// 4. REGISTRAR COMPONENTES GLOBALES
registrarComponentesGlobales(app);

// 5. MONTAR LA APP
app.mount('#app');
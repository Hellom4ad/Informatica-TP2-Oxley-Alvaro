/* === contacto.js (Ejemplo para tu formulario) === */
console.log("Cargando contacto.js...");

// 1. CREAR la app con la data y methods del formulario
const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            email: '',
            mensaje: ''
        }
    },
    methods: {
        enviarFormulario() {
            console.log("Enviando formulario en Vue 3:", this.nombre);
            alert('¡Formulario enviado!');
        }
    }
});

// 2. REGISTRAR los mismos componentes globales (¡Reutilización!)
registrarComponentesGlobales(app);

// 3. MONTAR la app
app.mount('#app');
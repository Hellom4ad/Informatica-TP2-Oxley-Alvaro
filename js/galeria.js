console.log("Cargando galeria.js...");

// 1. CREAR la app.
const app = Vue.createApp({
    // data, methods, computed... para la página de galeria (si los necesitas)
    // data() { return { ... } }
});

// 2. REGISTRAR los componentes globales.

registrarComponentesGlobales(app);

// 3. MONTAR la app en el HTML.
app.mount('#app');
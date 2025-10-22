/* === index.js === */
console.log("Cargando index.js...");

// 1. CREAR la app.
// (Aquí puedes añadir 'data', 'methods', etc. para ESTA página)
const app = Vue.createApp({
    // data, methods, computed... para la página de INICIO (si los necesitas)
    // data() { return { ... } }
});

// 2. REGISTRAR los componentes globales.
// ¡Llamamos a la función que definimos en el otro archivo!
registrarComponentesGlobales(app);

// 3. MONTAR la app en el HTML.
app.mount('#app');
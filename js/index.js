// 1. CREAR la app.
// (Aquí puedes añadir 'data', 'methods', etc. para ESTA página)
const app = Vue.createApp({
    // data, methods, computed... 
    // data() { return { ... } }
});

// 2. REGISTRAR los componentes globales.
// ¡Llamamos a la función que definimos en el otro archivo!
registrarComponentesGlobales(app);

// 3. MONTAR la app en el HTML.
app.mount('#app');
const app = Vue.createApp({
    data() {
        return {
            // Datos del formulario
            nombre: '',
            email: '',
            telefono: '', 
            asunto: '',   
            mensaje: '',
            
            // Objeto para guardar los errores de validación
            errors: {}   
        }
    },
    methods: {
        
        validarFormulario() {
            //  Resetea los errores en cada intento
            this.errors = {};

            // Validar Nombre
            if (!this.nombre.trim()) {
                this.errors.nombre = 'El nombre es obligatorio.';
            }

            // Validar Email (con Regex)
            if (!this.email.trim()) {
                this.errors.email = 'El email es obligatorio.';
            } else {
                // Expresión regular para validar un email
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(this.email)) {
                    this.errors.email = 'Por favor, introduce un email válido.';
                }
            }
            
            //  Validar Asunto
            if (!this.asunto.trim()) {
                this.errors.asunto = 'El asunto es obligatorio.';
            }

            //  Validar Mensaje
            if (!this.mensaje.trim()) {
                this.errors.mensaje = 'El mensaje es obligatorio.';
            }

            //  Devuelve 'true' si no hay errores (objeto errors está vacío)
            return Object.keys(this.errors).length === 0;
        },

        enviarFormulario() {
            // Primero llama a la validación 
            if (this.validarFormulario()) {
                // Si es válido, procede
                console.log("Formulario VÁLIDO, enviando:", {
                    nombre: this.nombre,
                    email: this.email,
                    telefono: this.telefono,
                    asunto: this.asunto,
                    mensaje: this.mensaje
                });
                
                alert('¡Formulario enviado con éxito!');
                
                // se limpia el formulario tras el envío
                this.nombre = '';
                this.email = '';
                this.telefono = '';
                this.asunto = '';
                this.mensaje = '';
                this.errors = {};

            } else {
                // Si no es válido
                console.log("El formulario tiene errores:", this.errors);
                // No se hace nada, los mensajes de error ya son visibles
            }
        }
    }
});


registrarComponentesGlobales(app);

app.mount('#app');
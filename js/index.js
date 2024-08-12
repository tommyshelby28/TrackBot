// Lista de emojis que queremos usar
const emojis = ['❤️', '🥰', '💖', '💕', '🩷', '💜', '💓', '💛', '🤍', '🌸', '😊', '🌟', '💫', '😄', '✨'];

// Función para obtener un emoji aleatorio
function obtenerEmojiAleatorio() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Función para copiar mensajes al portapapeles
function copiarMensaje(mensaje) {
    // Reemplazar $corazon con un emoji aleatorio
    const emojiAleatorio = obtenerEmojiAleatorio();
    const mensajeCompleto = mensaje.replace('$corazon', emojiAleatorio);
    
    var tempInput = document.createElement("input");
    tempInput.value = mensajeCompleto;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

// Función para obtener un mensaje aleatorio de una lista
function obtenerMensajeAleatorio(mensajes) {
    return mensajes[Math.floor(Math.random() * mensajes.length)];
}

// Event listeners para los botones
document.getElementById("fifteenButton").addEventListener("click", function() {
    sumarPorcentaje(15);
});

document.getElementById("twentyButton").addEventListener("click", function() {
    sumarPorcentaje(20);
});

document.getElementById("thirtyButton").addEventListener("click", function() {
    sumarPorcentaje(30);
});

document.getElementById("bienvenidaBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesBienvenida));
});

document.getElementById("pdfBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesPDF));
});

document.getElementById("porcentajeBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesPorcentaje));
});

document.getElementById("cargadasBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesCargadas));
});

document.getElementById("saludoBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajeSaludo));
});

document.getElementById("mensajePremios").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajePremios));
});

document.getElementById("mensajeNoDisponible").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajeNoDisponible));
});

// Función para sumar porcentaje
function sumarPorcentaje(porcentaje) {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const numero = parseFloat(numberInput.value);

    if (!isNaN(numero)) {
        const porcentajeCalculado = numero * (porcentaje / 100);
        resultElement.textContent = numero + " + " + porcentajeCalculado.toFixed(2);
    } else {
        resultElement.textContent = "Por favor ingrese un número válido.";
    }
}

// Función para generar y copiar mensaje personalizado al presionar Enter
document.getElementById("nameInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto del Enter
        generarYCopiarMensaje();
    }
});

// Función para generar y copiar mensaje personalizado
function generarYCopiarMensaje() {
    const nombreInput = document.getElementById("nameInput");
    const nombre = nombreInput.value.trim();
    if (nombre) {
        // Mensajes personalizados
        const mensajesPersonalizados = [
            `Hola, como estas ${nombre} $corazon?`,
            `Hola! ${nombre}! como te encontras hoy? $corazon`,
            `Que tal! ${nombre}, cómo te va? $corazon`,
            `Hola ${nombre}! que tal tu dia? $corazon`,
            `Hola, buenas! que tal ${nombre}? $corazon`,
            `Buenas como estas ${nombre} $corazon?`,
            `Hola, buenas! como te va ${nombre} $corazon?`,
            `Hola, ${nombre}, ¿cómo está todo $corazon`
        ];
        const mensaje = obtenerMensajeAleatorio(mensajesPersonalizados);
        copiarMensaje(mensaje);
        
        // Limpiar el campo de entrada
        nombreInput.value = '';
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Enfocar el campo de entrada al hacer clic en cualquier parte de la página
document.addEventListener("click", function(event) {
    if (event.target !== document.getElementById("nameInput")) {
        document.getElementById("nameInput").focus();
    }
});

// Mensajes predefinidos
const mensajesBienvenida = [
    "Hola! Qué tal? Me decis tu nombre para la creacion de tu usuario? $corazon", 
    "Buenas! Como estas? Podrías decirme tu nombre para crearte un usuario? $corazon", 
    "Hola! Que tal todo? Me dirias tu nombre asi creamos tu usuario? $corazon", 
    "Hola, como estás? Como es tu nombre para poder crearte un usuario? $corazon", 
    "Hola, que tal? Serias tan amable de indicarme tu nombre para crearte un usuario? $corazon", 
    "Hola, como estas? Serias tan amable de indicarme tu nombre para la creacion de tu usuario? $corazon", 
    "Hola, como estas? Serias tan amable de decirme tu nombre para crear tu usuario? $corazon",
    "Hola buenas, podrias decirme tu nombre para crearte un usuario? $corazon",
    "Hola buenas, me indicas tu nombre para proceder con la creación de tu usuario? $corazon",
    "Hola buenas, me podrías proporcionar tu nombre para registrar tu usuario? $corazon",
    "Buenas, me indicas tu nombre para crear tu usuario? $corazon",
    "Hola, podrias compartirme tu nombre para completar tu registro como usuario? $corazon",
    "Buenas que tal? Me podrías decir tu nombre para proceder con la creación de tu usuario? $corazon",
    "Hola, podrías proporcionarme tu nombre para crear tu usuario? $corazon",
    "Hola buenas, ¿me indicas tu nombre para completar el proceso de registro como usuario? $corazon",
    "Buen como estas? Podrías decirme tu nombre para proceder con la creación de tu cuenta de usuario? $corazon",
    "Hola, podrías facilitarme tu nombre para iniciar el proceso de creación de tu usuario? $corazon"
];

const mensajesPDF = [
    "No puedo descargar el comprobante, ¿podrías reenviármelo por favor a través de una captura de pantalla? $corazon", 
    "Podrias enviarme una captura de pantalla del comprobante? No puedo descargarlo. $corazon",
    "No puedo descargar el comprobante. ¿Sería posible que me lo enviaras por captura de pantalla, por favor? $corazon",
    "Seria posible que me enviaras el comprobante por captura de pantalla? No puedo descargarlo. $corazon"
];

const mensajesPorcentaje = [
    "El bono es un extra que te damos al cargar, por ejemplo si tenes un bono del 20% y cargas 1000$, te cargamos 1200$ $corazon",
    "El bono es un extra que te damos al cargar, por ejemplo si tenes un bono del 15% y cargas 1150$, te cargamos 1200$ $corazon"
];

const mensajesCargadas = [
    "Me indicas tu usuario para cargarte las fichas? $corazon", 
    "Me decis tu usuario para poder cargarte las fichas? $corazon", 
    "Para cargarte las fichas, me indicas tu usuario? $corazon"
];

const mensajeSaludo = [
    "Hola, como estas? En que puedo ayudarte? $corazon", 
    "Hola, que tal? En que puedo ayudarte? $corazon", 
    "Buenas, como estas? En que puedo ayudarte? $corazon", 
    "Buenas, que tal? En que puedo ayudarte? $corazon"
];

const mensajePremios = [
    "Hola, cómo estás? Antes de enviarte el número de retiros, podrías confirmarme si le sacaste una foto al premio para que podamos publicarla? Gracias. $corazon",
    "¡Hola! Qué tal? Quisiera saber si tomaste una foto del premio antes de darte el número de retiros, para que podamos compartirla $corazon",
    "Hola, cómo estas? Antes de proporcionarte el número de retiros, podrías enviarnos la foto del premio para que podamos publicarla? Muchas gracias $corazon"
];

const mensajeNoDisponible = [
    "Hola, cómo estás? Lamentablemente, el alias al que enviaste ya no esta disponible. Estoy en espera de confirmación sobre su disponibilidad, ya que necesito contactar al dueño de la cuenta actual. Esto podría demorar un poco. $corazon"
];

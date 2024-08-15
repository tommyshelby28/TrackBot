// Lista de emojis que queremos usar
const emojis = ['❤️', '🥰', '💖', '💕', '🩷', '💜', '💓', '💛', '🤍', '🌸', '😊', '🌟', '💫', '😄', '✨', '🌼', '🌻', '🌈', '⭐', '🌠', '🌌', '🌞', '🌙'];

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

// Variable global para almacenar el último nombre ingresado
let ultimoNombreIngresado = '';

// Función para generar y copiar mensaje personalizado
function generarYCopiarMensaje() {
    const nombreInput = document.getElementById("nameInput");
    const nombre = nombreInput.value.trim();
    if (nombre) {
        // Actualizar el último nombre ingresado
        ultimoNombreIngresado = nombre;

        // Mensajes personalizados
        const mensajesPersonalizados = [
            `Hola, como estas ${nombre} $corazon?`,
            `Hola! ${nombre}! como te encontras hoy? $corazon`,
            `Que tal! ${nombre}, como te va? $corazon`,
            `Hola ${nombre}! que tal tu dia? $corazon`,
            `Hola, buenas! que tal ${nombre}? $corazon`,
            `Buenas como estas ${nombre} $corazon?`,
            `Hola, buenas! como te va ${nombre} $corazon?`,
            `Hola, ${nombre}, como está todo? $corazon`,
            `Hola, ${nombre}, como estás? Espero que todo esté bien. $corazon`,
            `¡Hola, ${nombre}! Cómo te va todo? $corazon`,
            `Hola, ${nombre}, cómo va tu día? $corazon`
        ];
        const mensaje = obtenerMensajeAleatorio(mensajesPersonalizados);
        copiarMensaje(mensaje);
        
        // Limpiar el campo de entrada
        nombreInput.value = '';
    } else {
        console.log("Por favor, ingresa un nombre.");
    }
}

// Función para manejar el enfoque condicional
document.addEventListener("click", function(event) {
    const nameInput = document.getElementById("nameInput");
    const excludedElements = [
        "fifteenButton", "twentyButton", "thirtyButton",
        "bienvenidaBoton", "pdfBoton", "porcentajeBoton",
        "cargadasBoton", "saludoBoton", "mensajePremios",
        "mensajeNoDisponible", "numberInput", "cuenta", "cbu", "horario" // Incluye los campos de entrada adicionales
    ];

    if (!excludedElements.includes(event.target.id) && event.target !== nameInput) {
        nameInput.focus();
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
    "Hola buenas, me indicas tu nombre para completar el proceso de registro como usuario? $corazon",
    "Buen como estas? Podrías decirme tu nombre para proceder con la creación de tu cuenta de usuario? $corazon",
    "Hola, podrías facilitarme tu nombre para iniciar el proceso de creación de tu usuario? $corazon"
];

const mensajesPDF = [
    "No puedo descargar el comprobante, podrías reenviármelo por favor a través de una captura de pantalla? $corazon", 
    "Podrias enviarme una captura de pantalla del comprobante? No puedo descargarlo. $corazon",
    "No puedo descargar el comprobante. Sería posible que me lo enviaras por captura de pantalla, por favor? $corazon",
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
    "Hola! Qué tal? Quisiera saber si tomaste una foto del premio antes de darte el número de retiros, para que podamos compartirla $corazon",
    "Hola, cómo estas? Antes de proporcionarte el número de retiros, podrías enviarnos la foto del premio para que podamos publicarla? Muchas gracias $corazon"
];

const mensajeNoDisponible = [
    "Hola, cómo estás? Lamentablemente, el alias al que enviaste ya no esta disponible. Estoy en espera de que me confirmen si llego, necesito contactar al dueño de la cuenta. Esto podría demorar un poco. $corazon",
    "Hola, que tal? el alias al que enviaste ya no esta disponible, tengo que esperar que me confirmen si llego! necesito contactar al dueño de la cuenta lo cual podria demorar un poco. $corazon",
    "buenas, que tal? el alias al que enviaste ya no esta en uso, tenemos que esperar a nos confirmen si llego! tengo que contactar al dueño de la cuenta. Esto podría demorar un poco. $corazon"

];


// Función para obtener un mensaje aleatorio
function obtenerMensajeRandom(cuenta, cbu, horario, emoji = '') {
    const messages = [
        `${emoji} El alias disponible es: ${cbu}\n\n👩🏼‍🦰 Registrado a nombre de ${cuenta}\n\n*RECORDA CONSULTAR CBU*‼️\n\nHASTA LAS ${horario}`,
        `${emoji} El alias actual es: ${cbu}\n\n👩🏼‍🦰 A nombre de ${cuenta}\n\n*ASEGÚRATE DE VERIFICAR EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA LAS ${horario}`,
        `${emoji} Alias disponible: ${cbu}\n\n👩🏼‍🦰 A nombre de ${cuenta}\n\n*NO OLVIDES VERIFICAR EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA ${horario}${emoji}`,
        `${emoji} El alias disponible es: ${cbu}\n\n👩🏼‍🦰 Nombre de la cuenta: ${cuenta}\n\n*VERIFICA EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA ${horario}`,
        `${emoji} Alias disponible en este momento: ${cbu}\n\n👩🏼‍🦰 A nombre de ${cuenta}\n\n*ASEGÚRATE DE CHEQUEAR EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA ${horario}`,
        `${emoji} Aca te dejo el alias disponible: ${cbu}\n\n👩🏼‍🦰 Nombre registrado: ${cuenta}\n\n*NO OLVIDES VERIFICAR EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA ${horario}`,
        `${emoji} Alias disponible ahora: ${cbu}\n\n👩🏼‍🦰 A nombre de ${cuenta}\n\n*CHEQUEA EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA ${horario}`,
        `${emoji} El alias que estamos usando ahora es: ${cbu}\n\n👩🏼‍🦰 A nombre de ${cuenta}\n\n*CHEQUEA EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA ${horario}`,
        `${emoji} Estamos con el alias: ${cbu}\n\n👩🏼‍🦰 A nombre de ${cuenta}\n\n*CHEQUEA EL ALIAS ANTES DE ENVIAR*‼️\n\nVIGENTE HASTA LAS ${horario}`
    ];
    return messages[Math.floor(Math.random() * messages.length)] + ' ' + emoji;
}

// Función para actualizar el mensaje
function actualizarCBU() {
    const cuenta = document.getElementById('cuenta').value.trim();
    const cbu = document.getElementById('cbu').value.trim();
    const horario = document.getElementById('horario').value.trim();

    if (cuenta && cbu && horario) {
        // Guardar los datos en localStorage
        localStorage.setItem('cuenta', cuenta);
        localStorage.setItem('cbu', cbu);
        localStorage.setItem('horario', horario);
        
        // Generar un mensaje aleatorio y guardar en la variable global (si es necesario)
        const mensaje = obtenerMensajeRandom(cuenta, cbu, horario);
        window.mensajeCBU = mensaje;
    } else {
        // Opcional: Puedes manejar errores aquí si lo deseas
        window.mensajeCBU = ''; // No hay mensaje válido para copiar
    }
}

// Función para copiar el mensaje con formato
function copiarMensajeCbu() {
    const cuenta = document.getElementById('cuenta').value.trim();
    const cbu = document.getElementById('cbu').value.trim();
    const horario = document.getElementById('horario').value.trim();

    if (cuenta && cbu && horario) {
        // Obtener un emoji aleatorio para agregar al final del mensaje
        const emojiAleatorio = obtenerEmojiAleatorio();
        
        // Generar un mensaje aleatorio con el emoji
        const mensaje = obtenerMensajeRandom(cuenta, cbu, horario, emojiAleatorio);
        
        // Agregar el último nombre ingresado al mensaje
        const mensajeConNombre = `${ultimoNombreIngresado}${mensaje}`;
        
        // Copiar el mensaje al portapapeles
        navigator.clipboard.writeText(mensajeConNombre).then(() => {
            // Opcional: Puedes mostrar un mensaje de éxito aquí si lo deseas
        }).catch(err => {
            fallbackCopyTextToClipboard(mensajeConNombre);
        });
    } else {
        alert('Por favor, complete todos los campos.');
    }
}



// Función de respaldo para copiar el texto al portapapeles
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.log('Error al copiar el mensaje.');
    }
    document.body.removeChild(textArea);
}

// Función para cargar los datos guardados
function cargarDatos() {
    const cuenta = localStorage.getItem('cuenta');
    const cbu = localStorage.getItem('cbu');
    const horario = localStorage.getItem('horario');

    if (cuenta) document.getElementById('cuenta').value = cuenta;
    if (cbu) document.getElementById('cbu').value = cbu;
    if (horario) document.getElementById('horario').value = horario;
}

// Cargar los datos guardados cuando se carga la página
window.onload = cargarDatos;

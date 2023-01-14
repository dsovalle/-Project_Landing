function openWhatsApp() {
    // Reemplaza 'PHONE_NUMBER' con el número de teléfono al que deseas enviar el mensaje
    var phoneNumber = 'Number';
    // Reemplaza message con el mensaje que deseas enviar
    var message = 'Hola, cuéntanos tu inquietud';
    // Abre la conversación en WhatsApp
    window.open('https://wa.me/' + phoneNumber + '?text=' + message);
}

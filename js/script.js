function openWhatsApp() {
  // Reemplaza 'Number' con el número de teléfono al que deseas enviar el mensaje
  var phoneNumber = "Number";
  // Reemplaza el mensaje que deseas enviar, puse uno por defecto.
  var message = "Hola, cuéntanos tu inquietud";
  // Abre la conversación en WhatsApp
  window.open("https://wa.me/" + phoneNumber + "?text=" + message);
}

const socket = io();
socket.emit("message", "Hola, me estoy comunicando con un websocket!");

Swal.fire({
    icon: 'success',
    title: 'Hola Coders!',
    text: 'Alerta basica de Sweetalert2',
    footer: '<a href="">Porque veo ésta alerta?</a>'
  });
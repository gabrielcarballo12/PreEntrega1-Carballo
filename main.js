const oferta = prompt("¿Te gustaría recibir nuestras ofertas?").toLowerCase();

if (oferta === "si") {
  alert("Gracias. Ahora le pediremos unos datos!");

  let nombre = '';
  while (nombre === '') {
    nombre = prompt("Ingresa tu nombre");
    if (nombre === '') {
      alert("Debes ingresar tu nombre.");
    }
  }
  console.log(`Tu nombre es ${nombre}`);

  let apellido = '';
  while (apellido === '') {
    apellido = prompt(`Muchas gracias ${nombre}. Ahora podrías decirme tu Apellido?`);
    if (apellido === '') {
      alert("Debes ingresar tu apellido.");
    }
  }
  console.log(`Tu apellido es ${apellido}`);

  const listaJuegos = [
    { juego: "The Legend of Zelda: Breath of the Wild", precio: 30.000 },
    { juego: "Red Dead Redemption 2", precio: 30.000 },
    { juego: "Halo Infinite", precio: 30.000 },
    { juego: "Call Of Duty: Modern Warfare II", precio: 30.000}
  ];

  let juegoInteres = prompt("Ingresa el juego que te interese");
  let precioJuego = null;


  for (let i = 0; i < listaJuegos.length; i++) {
    if (listaJuegos[i].juego.toLowerCase() === juegoInteres.toLowerCase()) {
      precioJuego = listaJuegos[i].precio;
      break;
    }
  }

  if (precioJuego !== null) {
    alert(`¡Excelente elección, ${nombre}! El juego "${juegoInteres}" tiene un precio de $${precioJuego}. ¡Disfruta de tu experiencia en nuestra tienda de videojuegos!`);
  } else {
    alert(`Lo sentimos, ${nombre}. El juego "${juegoInteres}" no se encuentra en nuestra tienda.`);
  }
} else {
  alert("Gracias y bienvenido/a");
}
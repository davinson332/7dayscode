// Información del usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
// Mensaje personalizado
alert(`Hola ${nombre}, tienes ${edad} años y estás aprendiendo ${lenguaje}`);

// Pregunta de si o no
let repuesta = prompt ('¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.');

// Respuesta
if (respuesta == "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}else if (respuesta == "2") {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}else {
    alert("Por favor,Responde con el número 1 para SÍ o 2 para NO.");
}


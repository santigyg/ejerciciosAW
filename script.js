const boton = document.getElementById('boton-reservar');
const contenedor = document.getElementById('seleccion-visitas');
const personas = document.getElementById('personas');

//estamos usando DOM porque creemos que es necesario, aunque en la práctica pone que no
boton.addEventListener('click', () => {
   
    const precio = Number(contenedor.value); 
    const visitantes = Number(personas.value);

    const totalFinal = calcularPrecioConDescuento(precio, visitantes);
    console.log("El precio total es: " + totalFinal);
});


function calcularPrecioConDescuento(precio, personas) {
    let total = precio * personas;
    
    if (personas >= 4) {
        total = total * 0.9;
    }
    
    return total;
}

function estadoDisponibilidad(plazas) {
    if (plazas === 0) return "Completa";
    if (plazas <= 3) return "Últimas plazas";
    return "Disponible";
}


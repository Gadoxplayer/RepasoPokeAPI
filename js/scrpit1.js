window.addEventListener('load', function () {

const espacio = document.querySelector('.container')
const urlLugia  = "https://pokeapi.co/api/v2/pokemon/lugia"
const urlPokeDexLugia = "https://pokeapi.co/api/v2/pokemon-species/lugia"

function cargarPokeAPI(endPoint) {
    fetch(endPoint)

    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (informacion) {
        // console.log(informacion)
        // console.log(informacion.sprites.front_default);
        renderizarImg(informacion);
        // renderizarDex(informacion);
        })
    
       

    }

        
    cargarPokeAPI(urlLugia);
    // cargarPokeAPI(urlPokeDexLugia);

    function renderizarImg(valor) {

        espacio.innerHTML += `
        <div class="tarjeta">
            <img src="${valor.sprites.front_default}" alt="">
            <h2>${valor.name}</h2>
            <img src="${valor.sprites.front_shiny}" alt="">
            <h2>${valor.name} Shiny</h2>
        </div>`
    }

    // function renderizarDex(valor) {
    //     espacio.innerHTML += `
    //     <div class="tarjeta">
    //         <p>${valor.flavor_text_entries[0].flavor_text}</p>
    //         <h2>Pokedex GEN 2 Shiny</h2>
    //     </div>`
    // }

  




    //animaciones//

    // Simulamos un proceso que demora 5 segundos en completarse
    const tiempoDeCarga = 2000;
            
    function animarBarra() {
        // Seleccionamos el elemento barra
        let elem = document.getElementById("barra");
        
        // Inicializamos el progreso en 0, para asegurarnos
        // que siempre arranque desde el principio
        let width = 0;
        
        // Calculamos el progreso en base al tiempo total de carga,
        const progresoSobreTiempoTotal = tiempoDeCarga / 100;
        
        // Creamos un intervalo que se repita en el tiempo que calculamos
        // para ir incrementando el progreso.
        let id = setInterval(incrementarProgreso, progresoSobreTiempoTotal);
        
        function incrementarProgreso() {
            // Si el progreso esta completo, detenemos el programa
            if (width >= 100) {
            clearInterval(id);
            } else {
            width++;
        
            // Modificamos el DOM, para impactar el nuevo progreso.
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            }
        }
    }
    
    document.querySelector("#iniciar-carga").addEventListener("click", animarBarra);

});
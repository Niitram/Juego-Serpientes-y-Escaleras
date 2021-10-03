const $tablero = document.getElementById("tablero");
const $ficha1 = document.getElementById("ficha1");
const $ficha2 = document.getElementById("ficha2");
const $nombreJugador1 = document.getElementById("nombreJugador1");
const $nombreJugador2 = document.getElementById("nombreJugador2");
const $casilleros = document.querySelectorAll("div.casillero");
const $dado = document.querySelector('#dado');
const $dadoPantalla = document.querySelector('#dadoPantalla')
const $ganador = document.querySelector('.ganador')
const $ganadorMensaje = document.querySelector('.ganador__mensaje')
const $btnReglas = document.querySelector('#btnReglas')
const $reglasVentana = document.querySelector('.reglasVentana')
const $btnReglasVentana = document.querySelector('#btnReglasVentana')

class Player {
    constructor(turno, casillero, ficha, nombre) {
        this.turno = turno;
        this.casillero = casillero;
        this.ficha = ficha;
        this.nombre = nombre;
    };
};


const player1 = new Player(true, 0, $ficha1),
    player2 = new Player(false, 0, $ficha2);
//Pide los nombres de los jugadores
const pedirNombre = () => {
    player1.name = prompt(`Ingrese el nombre del primer jugador`)
    player2.name = prompt("Ingrese el nombre del segundo jugador")
    cambiarNombres()
}
//Cambiar los nombre de los players en html
const cambiarNombres = () => {
    $nombreJugador1.innerHTML = `<i class="fas fa-frog"></i>${player1.name}`;
    $nombreJugador2.innerHTML = `<i class="fas fa-crow"></i>${player2.name}`;
}
//toma la posicion en Y
const getPositionY = (casillero) => {
    return casillero.offsetTop;
};
//toma la posicion en X
const getPositionX = (objeto) => {
    return objeto.offsetLeft;
};
//encuantra el valor en X del casillero
const positionXCasillero = (player) => {
    $casilleros.forEach(element => {
        if (element.id === `${player.casillero}`) {
            return posicionXDelCasillero = getPositionX(element)

        }
    });
}
//encuantra el valor en Y del casillero
const positionYCasillero = (player) => {
    $casilleros.forEach(element => {
        if (element.id === `${player.casillero}`) {
            return posicionYDelCasillero = getPositionY(element)
        }
    });
}
//crea un numero aleatorio entre 1 y 6
const dado = () => {
    return valorDado = Math.floor(Math.random() * (6 - 1 + 1) + 1)
};
//calcula y devuelve cual casillero le toca
const casilleroProximo = (player, dado) => {
    if (player.casillero >= 100) {
        return player.casillero = 100
    }
    return player.casillero = player.casillero + dado;
}
//pantallaAleatoria
const pantallaAleatoria = () => {
    setTimeout(() => {  
        $dadoPantalla.setAttribute("src", `img/snake.png`);
    }, 0);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/escalera.png`);
    }, 300);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/star-yellow.png`);
    }, 600);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/signo-pregunta.png`);
    }, 900);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/snake.png`);
    }, 1200);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/escalera.png`);
    }, 1500);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/star-yellow.png`);
    }, 1800);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/signo-pregunta.png`);
    }, 2100);
    setTimeout(() => {
        $dadoPantalla.setAttribute("src", `img/${valorDado}.png`);
    }, 2400);

}
//casilleros que suben
const casillerosSuben = (player) => {
    if (player.casillero === 1) {
        return player.casillero = 38
    }
    if (player.casillero === 4) {
        return player.casillero = 14
    }
    if (player.casillero === 9) {
        return player.casillero = 31
    }
    if (player.casillero === 21) {
        return player.casillero = 42
    }
    if (player.casillero === 28) {
        return player.casillero = 84
    }
    if (player.casillero === 51) {
        return player.casillero = 67
    }
    if (player.casillero === 72) {
        return player.casillero = 91
    }
    if (player.casillero === 80) {
        return player.casillero = 99
    }
}
//casilleros que bajan
const casillerosBajan = (player) => {
    if (player.casillero === 17) {
        return player.casillero = 7;
    }
    if (player.casillero === 62) {
        return player.casillero = 19;
    }
    if (player.casillero === 54) {
        return player.casillero = 34
    }
    if (player.casillero === 64) {
        return player.casillero = 60
    }
    if (player.casillero === 87) {
        return player.casillero = 36
    }
    if (player.casillero === 93) {
        return player.casillero = 73
    }
    if (player.casillero === 95) {
        return player.casillero = 75
    }
    if (player.casillero === 98) {
        return player.casillero = 79
    }
}
//mueve la ficha al casillero que toca
const moverFicha = (player, casilleroX, casilleroY) => {
    return casilleroActual = player.ficha.style.transform = `translate(${casilleroX}px, ${casilleroY}px)`;
};
//conjunto de las fichas para mover la ficha al casillero 
const moverFichaPosicion = (player) => {
    positionXCasillero(player)
    positionYCasillero(player)
    moverFicha(player, posicionXDelCasillero, posicionYDelCasillero)
}
//player que le toca cambia el borde del nombre
const turnoActual = (elemento, pixeles = 1, color, size) => {
    elemento.style.border = `${pixeles}px ${color} solid`;
    elemento.style.backgroundColor = `${color}`
    elemento.style.transform = `scale(${size})`
};
//Pinta en pantalla al gandor
const mostrarGanador =(player)=>{
    if (player.casillero == 100) {
        $ganadorMensaje.textContent= `felicidades ganador ${player.name}!!!`
        $ganador.style.zIndex = "99999";
        $ganador.style.transform = "scale(1.3)";
    }
}
//Aplicar clase
const agregarClase = (elemento, clase) => {
    elemento.classList.toggle(`${clase}`)
}


/* funciones que ejecuta el player 1 */
const juegaPlayer1 = () => {
    turnoActual($nombreJugador1, 3, 'rgba(255, 0, 0, 0.192)', 1.3)

    dado()
    casilleroProximo(player1, valorDado)
    pantallaAleatoria()
    setTimeout(() => {
        moverFichaPosicion(player1)
        let casilleroSubida = casillerosSuben(player1)
        let casillerosQueBajan = casillerosBajan(player1)
        if (player1.casillero === casilleroSubida || player1.casillero === casillerosQueBajan) {
            setTimeout(() => {
                moverFichaPosicion(player1)
            }, 2000)
        }
        player1.turno = false;
        player2.turno = true;
        $dado.removeEventListener('click', juegaPlayer1)
        $dado.addEventListener('click', juegaPlayer2)
    }, 2500);
    $ficha1.addEventListener("transitionend", () => {
        turnoActual($nombreJugador2, 3, 'rgba(21, 255, 0, 0.192)', 1.3)
        turnoActual($nombreJugador1, 0, 'rgba(255, 255, 255, 0)', 0.8)
        mostrarGanador(player1)
    });
}
/* funciones que ejecuta el player 2 */
const juegaPlayer2 = () => {
    dado()
    casilleroProximo(player2, valorDado)
    pantallaAleatoria()
    setTimeout(() => {
        moverFichaPosicion(player2)
        let casilleroSubida = casillerosSuben(player2)
        let casillerosQueBajan = casillerosBajan(player2)
        if (player2.casillero === casilleroSubida || player2.casillero === casillerosQueBajan) {
            setTimeout(() => {
                moverFichaPosicion(player2)
            }, 2000)
        }
        $ficha2.addEventListener("transitionend", () => {
            turnoActual($nombreJugador1, 3, 'rgba(255, 0, 0, 0.192)', 1.3)
            turnoActual($nombreJugador2, 0, 'rgba(255, 255, 255, 0)', .8)
            mostrarGanador(player2)
        });
        player2.turno = false;
        player1.turno = true;
        $dado.removeEventListener('click', juegaPlayer2)
        $dado.addEventListener('click', juegaPlayer1)
    }, 2500);
}
/* EMPIEZA EJECUCION DE FUNCIONES */
$dado.addEventListener('click', juegaPlayer1)
$btnReglas.addEventListener('click', ()=>{
    $reglasVentana.style.display = 'block'
})
$btnReglasVentana.addEventListener('click', ()=>{
    $reglasVentana.style.display = 'none'
})
window.onload = function () {
    pedirNombre();

}




const $tablero = document.getElementById("tablero");
const $ficha1 = document.getElementById("ficha1");
const $ficha2 = document.getElementById("ficha2");
const $nombreJugador1 = document.getElementById("nombreJugador1");
const $nombreJugador2 = document.getElementById("nombreJugador2");
const $casilleros = document.querySelectorAll("div.casillero");
const $dado = document.querySelector('#dado');
const $dadoPantalla = document.querySelector('#dadoPantalla')
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
    let posicionY = casillero.offsetTop;
    return posicionY;
};
//toma la posicion en X
const getPositionX = (objeto) => {
    let posicionX = objeto.offsetLeft;
    return posicionX;
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
}
//calcula y devuelve cual casillero le toca
const casilleroProximo = (player, dado) => {
    if (player.casillero > 100) {
        return player.casillero = 100
    }
    return player.casillero = player.casillero + dado;
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
//player que le toca cambia el borde del nombre
const turnoActual = (elemento, pixeles = 1, color, size) => {
    elemento.style.border = `${pixeles}px ${color} solid`;
    elemento.style.backgroundColor = `${color}`
    elemento.style.transform = `scale(${size})`
};
//Aplicar clase
const agregarClase = (elemento, clase) => {
    elemento.classList.toggle(`${clase}`)
}


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
/* funciones que ejecuta el player 1 */
const juegaPlayer1 = () => {
    turnoActual($nombreJugador1, 3, 'rgba(255, 0, 0, 0.192)', 1.3)
    console.log(`player1: ${player1.casillero}`)
    dado()
    pantallaAleatoria()
    casilleroProximo(player1, valorDado)
    positionXCasillero(player1)
    positionYCasillero(player1)
    moverFicha(player1, posicionXDelCasillero, posicionYDelCasillero)
    console.log(`player1: ${player1.casillero}`)
    let casilleroSubida = casillerosSuben(player1)
    let casillerosQueBajan = casillerosBajan(player1)
    console.log(`player1: despues ${player1.casillero}`)
    if (player1.casillero === casilleroSubida || player1.casillero === casillerosQueBajan) {
        setTimeout(() => {
            console.log("desde adentro")
            positionXCasillero(player1)
            positionYCasillero(player1)
            moverFicha(player1, posicionXDelCasillero, posicionYDelCasillero)
        }, 2000)
    }
    $ficha1.addEventListener("transitionend", () => {
        turnoActual($nombreJugador2, 3, 'rgba(21, 255, 0, 0.192)', 1.3)
        turnoActual($nombreJugador1, 0, 'rgba(255, 255, 255, 0)', 0.8)
    });
    console.log(`player1 despues del interval: ${player1.casillero}`)
    player1.turno = false;
    player2.turno = true;
    $dado.removeEventListener('click', juegaPlayer1)
    $dado.addEventListener('click', juegaPlayer2)
}
/* funciones que ejecuta el player 2 */
const juegaPlayer2 = () => {
    console.log(`player2: ${player2.casillero}`)
    dado()
    casilleroProximo(player2, valorDado)
    positionXCasillero(player2)
    positionYCasillero(player2)
    moverFicha(player2, posicionXDelCasillero, posicionYDelCasillero)
    console.log(`player2: ${player2.casillero}`)
    let casilleroSubida = casillerosSuben(player2)
    let casillerosQueBajan = casillerosBajan(player2)
    console.log(`player2: despues ${player2.casillero}`)
    if (player2.casillero === casilleroSubida || player2.casillero === casillerosQueBajan) {
        setTimeout(() => {
            console.log("desde adentro")
            positionXCasillero(player2)
            positionYCasillero(player2)
            moverFicha(player2, posicionXDelCasillero, posicionYDelCasillero)
        }, 2000)
    }
    $ficha2.addEventListener("transitionend", () => {
        turnoActual($nombreJugador1, 3, 'rgba(255, 0, 0, 0.192)', 1.3)
        turnoActual($nombreJugador2, 0, 'rgba(255, 255, 255, 0)', .8)
    });
    console.log(`player2 despues del interval: ${player2.casillero}`)
    player2.turno = false;
    player1.turno = true;
    $dado.removeEventListener('click', juegaPlayer2)
    $dado.addEventListener('click', juegaPlayer1)
}
/* EMPIEZA EJECUCION DE FUNCIONES */
const empezar = new Promise(
    pantallaAleatoria()
);
$dado.addEventListener('click', () => {

    empezar.then(juegaPlayer1)
})

window.onload = function () {
    pedirNombre();

}




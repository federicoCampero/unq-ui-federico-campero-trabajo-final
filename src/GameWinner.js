const winAgains ={
    "Piedra": ["Tijera","Lagarto"],
    "Papel": ["Piedra","Spock"],
    "Tijera": ["Papel","Lagarto"],
    "Lagarto": ["Spock","Papel"],
    "Spock": ["Tijera","Piedra"]
}

function GameWinner(jugador1, jugador2){

    if(jugador1 === jugador2){
        return "Empate";
    }else if (winAgains[jugador1].includes(jugador2)){
        return "jugador1"
    }else {
        return "jugador2"
    }

    

}

export default GameWinner;


const winAgains ={
    "Piedra": ["Tijera","Lagarto"],
    "Papel": ["Piedra","Spock"],
    "Tijera": ["Papel","Lagarto"],
    "Lagarto": ["Spock","Papel"],
    "Spock": ["Tijera","Piedra"]
}

function GameWinner(choice1, choice2){

    if(choice1 === choice2){
        return "draw";
    }else if (winAgains[choice1].includes(choice2)){
        return "choice1"
    }else {
        return "choice2"
    }

    

}

export default GameWinner;


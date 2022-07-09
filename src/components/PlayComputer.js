import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import GameWinner from '../GameWinner';

function PlayComputer() {

    const choices = ["Piedra", "Papel", "Tijera" , "Lagarto" ,"Spock"]

    const [myChoice, setMyChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [winner, setWinner] = useState("");


    const handleClick = (myChoice) =>{

        setMyChoice(myChoice);

        var choiceComputer = choices[Math.floor(Math.random() * (4 - 0 + 1) + 0)];

        setComputerChoice(choiceComputer);
        

        setWinner(GameWinner(myChoice,choiceComputer));
 
    }

    return <div className="container">

    <div className="row border">

        <h1> Elegi tu elección</h1>
    </div>

    <div className="row justify-content-center border">

        <div className='col-5 border caja-elecciones'>

            { choices.map( (choice, index) =>

                <button type="button"  
                        key={index} 
                        onClick={() => handleClick(choice)} 
                        className="btn btn-primary">{choice}</button>

            )
            
            }

        </div>

        <p>Mi eleccion es: {myChoice}</p>
        <p>Eleccion computadora: {computerChoice}</p>

        <p>El ganador es: {winner}</p>
        
    </div>



    </div>



    

}

export default PlayComputer;
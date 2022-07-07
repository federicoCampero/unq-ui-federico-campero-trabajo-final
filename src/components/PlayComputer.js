import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function PlayComputer() {

    const choices = ["Piedra", "Papel", "Tijera" , "Lagarto" ,"Spock"]

    const [myChoice, setMyChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");


    const handleClick = (choice) =>{

        setMyChoice(choice);
        setComputerChoice(choices[Math.floor(Math.random() * (4 - 0 + 1) + 0)])

    }


    return <div className="container">

    <div className="row border">

        <h1> Elegi tu elección</h1>
    </div>

    <div className="row justify-content-center border">

        <div className='col-2 border'>

            { choices.map( (choice, index) =>

                <button type="button"  
                        key={index} 
                        onClick={() => handleClick(choice)} 
                        className="btn btn-primary">{choice}</button>

            )
            
            
            }

        

            



        </div>

        <p>mi eleccion es: {myChoice}</p>
        <p>eleccion computadora: {computerChoice}</p>
        
    </div>



    </div>



    

}

export default PlayComputer;
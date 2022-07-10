import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import GameWinner from '../GameWinner';

function PlayComputer() {

    const choices = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]

    const [myChoice, setMyChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [winner, setWinner] = useState("");
    const [result, setResult] = useState("");


    const handleClick = (myChoice) => {

        setMyChoice(myChoice);

        var choiceComputer = choices[Math.floor(Math.random() * (4 - 0 + 1) + 0)];

        setComputerChoice(choiceComputer);


        setWinner(GameWinner(myChoice, choiceComputer));

        if(winner === "draw"){
            setResult("Empate");
        }else if(winner === "choice1"){
            setResult("Ganaste");
        }else {
            setResult("Gano la computadora")
        }

    }

    return <div className="container">

        <div className="row border">
            <h1> Elegi tu elección: </h1>
        </div>

        <div className="row justify-content-center border">

            <div className='col-5 border caja-elecciones'>

                {choices.map((choice, index) =>

                    <button type="button"
                        key={index}
                        onClick={() => handleClick(choice)}
                        className="btn btn-primary">{choice}</button>

                )

                }

            </div>

            <div className="row justify-content-center border">

                
                <div className='col-3 sm border'>

                    <p>Tu elección es:</p>

                    <p>  {myChoice} </p>

                </div>

                <div className='col-3 sm border'>

                    <p>Elección computadora:</p>

                    <p>  {computerChoice} </p>
                    
                </div>


                <p>Resultado:</p>

                <p>  {result} </p>



            </div>



        </div>

        <div className="row border">
            <Link to='/'>
                        <p> Menu Principal </p>
                </Link>
        </div>




    </div>





}

export default PlayComputer;
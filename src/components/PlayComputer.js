import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import GameWinner from '../GameWinner';

function PlayComputer() {

    const choices = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]

    const [myChoice, setMyChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [winner, setWinner] = useState("");
    const [result, setResult] = useState("");
    const [myScore, setMyScore] = useState(0);
    const [games, setGames] = useState(0);


    const handleClick = (myChoice) => {

        setMyChoice(myChoice);

        var choiceComputer = choices[Math.floor(Math.random() * (4 - 0 + 1) + 0)];

        setComputerChoice(choiceComputer);

        setWinner(GameWinner(myChoice, choiceComputer));

        setGames(games+1);

    }

    useEffect(() => {

        if (winner === "draw") {
            setResult("Empate");
        } else if (winner === "choice1") {
            setResult("Ganaste");
            setMyScore(myScore + 1);
        } else {
            setResult("Perdiste")
        }

    },[games])

    return <div className="container section-gray">

        <div className="row">
            <h1> Elegi tu elección: </h1>
        </div>

        <div className="row justify-content-center">

            <div className='col-5 box-buttons'>

                {choices.map((choice, index) =>

                    <button type="button"
                        key={index}
                        onClick={() => handleClick(choice)}
                        className="btn btn-primary">{choice}</button>

                )

                }

            </div>

            <div className="row justify-content-center ">


                <div className='col-3 section-blue'>

                    <p>Tu elección es:</p>

                    <p>  {myChoice} </p>

                </div>

                <div className='col-3 section-blue'>

                    <p>Elección computadora:</p>

                    <p>  {computerChoice} </p>

                    

                </div>


                    <h3>Resultado:</h3>

                    <p>  {result} </p>

                    <p>Cantidad de partidas:</p>

                    <p>  {games} </p>


                    <p>Cantidad de victorias:</p>

                    <p>  {myScore} </p>

            </div>



        </div>

        <div className="row footer">
            <Link to='/'>
                <p> Menu Principal </p>
            </Link>
        </div>




    </div>





}

export default PlayComputer;
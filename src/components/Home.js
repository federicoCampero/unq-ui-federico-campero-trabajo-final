import { Link } from 'react-router-dom'

function Home() {



    return <div className="container">

        <div className="row border">

            <h1> Juega Piedra, Papel, Tijera, Lagarto o Spock</h1>
        </div>

        <div className="row justify-content-center border">
            

                <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg/220px-Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg.png"
                    class="img-thumbnail w-25" alt="imagen del juego" />
       


        </div>

   

        <div className="row justify-content-center border">

            <div className='col-3 border caja-elecciones'>

                <Link to='/PlayComputer'>
                <button type="button" 
                        className="btn btn-primary">Jugar contra la computadora</button>
                </Link>

            </div>





        </div>



    </div>





}

export default Home;

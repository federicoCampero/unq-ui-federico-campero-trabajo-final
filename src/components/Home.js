import { Link } from 'react-router-dom'

function Home() {



    return <div className="container">

    <div className="row border">

        <h1> Juega Piedra, Papel, Tijera, Lagarto o Spock</h1>
    </div>

    <div className="row justify-content-center border">

        <div className='col-2 border'>

            <Link className="playVsComputer-link" to='/PlayComputer'>Jugar contra computadora</Link>

        </div>



        
        
    </div>



    </div>



    

}

export default Home;

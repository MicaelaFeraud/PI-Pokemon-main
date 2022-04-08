import './LandingPage.css';
import {Link} from 'react-router-dom';

function LandingPage(){
    return (
        <div className="Landing-Page">
            <img src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" style={{display:'block', width:'400px'}} alt="pokemon logo text png" />
            <Link to= '/pokemons'>
            <button className="enter-button">Enter</button>
            </Link>
        </div>
    )
}
export default LandingPage;
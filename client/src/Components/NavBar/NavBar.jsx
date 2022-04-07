import './NavBar.css';
import {Link} from 'react-router-dom';
import FilterForType from '../FilterForType/FilterForType';
import SearchBar from '../SearchBar/SearchBar';
import OrderSelector from '../OrderSelector/OrderSelector';
import HomeButton from './HomeButton/HomeButton';
import CustomPokemonsButton from './CustomPokemonsButton';

export default function NavBar(){
    return (
        <div className="navbar navbar-font">
            <Link to ="/pokemons">
                <HomeButton/>
            </Link>
            <Link to ="/pokemons/createPokemon" className="link-destyling custom-pokemons-buttons">
                Create a new Pokemon
            </Link>
            <Link to ="/pokemons">
                <CustomPokemonsButton/>
            </Link>
            <SearchBar/>
            <FilterForType/>
            <OrderSelector/>
        </div>
    );
}
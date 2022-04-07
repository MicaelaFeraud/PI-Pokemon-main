import './NavBar.css';
import {setShowCustomPokemons, resetFilters} from '../../Actions/mainAction';
import {connect} from "react-redux";

function CustomPokemonsButton(props) {
    const handleButtonClick = () => {
        props.resetFilters();
        props.setShowCustomPokemons(true);
    }
    return(
        <button className="custom-pokemons-buttons" onClick={handleButtonClick}>
            <span>Your pokemons</span>
        </button>
    );
};

const mapDispatchToProps = {
    resetFilters,
    setShowCustomPokemons,
};

export default connect(
    null,
    mapDispatchToProps
)(CustomPokemonsButton);
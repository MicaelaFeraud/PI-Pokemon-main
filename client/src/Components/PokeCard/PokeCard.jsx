import {selectPokemonsByName} from "../../Actions/mainAction";
import "./PokeCard.css";
import {useNative} from 'react-router-dom';
import {connect} from "react-redux";

function PokeCard(props) {
    const {pokemon} = props;
    const navigate = useNative();
    const handlePokeCardClick= () =>{
        props.selectPokemonsByName(pokemon.name);
        navigate("pokemons/selectedPokemon");
    }
    return(
        <button className="poke-card-button" onClick={handlePokeCardClick}>
            <div className="box">
                <h3>{CFL(pokemon.name)}</h3>
                <div className="image-box">
                    <img src={pokemon.img} alt={pokemon.name} className="pokeImg" />
                </div>
                <h3>{pokemon.type.map(t => CFL(t)).join(` - `)}</h3>
            </div>
        </button>
    );
}
export const CFL = (name) => name[0].toUpperCase() + name.slice(1);

const mapDispatchToProps = {
    selectPokemonsByName
}

export default connect(
    null,
    mapDispatchToProps
)(PokeCard);
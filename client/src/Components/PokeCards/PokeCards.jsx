import './PokeCards.css';
import PokeCard from "../PokeCard/PokeCard.jsx";
import { connect } from "react-redux";
import PaginationBar from '../PaginationBar/PaginationBar';

function PokeCards(props) {
    if(props.displayedPokemons.length === 0){
        return(
            <div className="loading-gif poke-cards-window-background">
                <img src="https://art.ngfiles.com/images/1227000/1227695_sinlessshadow_loading.gif?f1586321823"/>
                <PaginationBar/>
            </div>
        )
    }
    return (
      <div className="poke-cards-window-background" >
          <div className="poke-cards-window">
            {props.displayedPokemons.map((p) => <PokeCard key={pokemon.id} pokemon={pokemon} />)}
          </div>
          <div>
              <PaginationBar/>
          </div>
      </div>  
    );
}

function mapStateToProps(state) {
    return {
        displayedPokemons: state.displayedPokemons
    };
}

export default connect(mapStateToProps,)(PokeCards);
import { setTypeFilter } from '../../Actions/mainAction';
import {connect} from 'react-redux';

function FilterForType(props){
    const selectesType = props.filtersForPokemons.type;
    const handleSelect = (e) => {
        props.setTypeFilter(e.target.value);
    };
    return (
        <div>
            <label>Filter by Type: </label>
            <select value={selectesType} onChange={handleSelect}>
                <option value= "All" > All </option>
                {props.type.map(t => {
                    return (<option key = {t.id} value= {t.name}>{t.name}</option>)
                })}
            </select>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        types: state.types,
        filtersForPokemons: state.filtersForPokemons
    };
};

const mapDispatchToProps = {setTypeFilter};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForType);
import {setOrderPokemonsBy} from '../../Actions/mainAction';
import {connect} from "react-redux";
import { useState } from 'react';

function OrderSelector(props) {
    const [selectedOrder, setSelectedOrder] = useState("");
    const handleSelect = (e) => {
        let selectedOrder = e.target.value;
        setSelectedOrder(selectedOrder);
        props.setOrderPokemonsBy(selectFunction(selectedOrder));
    }
    const selectFunction = (targetFunction) => {
        switch(targetFunction) {
            case "alphaAscen":
                return alphaAscen;
            case "alphaDesc":
                return alphaDesc;
            case "byForceAscen":
                return byForceAscen;
            case "byForceDesc":
                return byForceDesc;
            default:
                return maintainOrder;
        }
    }
    const alphaAscen = (firstEl, secondEl) => {
        if(firstEl.name < secondEl.name)
            return -1;
        return 1;
    }
    const alphaDesc = (firstEl,secondEl) => {
        if(firstEl.name < secondEl.name)
            return 1;
        return -1;
    }
    const byForceAscen = (firstEl, secondEl)=>{
        return firstEl.attack - secondEl.attack
    }
    const byForceDesc = (firstEl, secondEl) =>{
        return secondEl.attack - firstEl.attack
    }
    const maintainOrder = (firstEl, secondEl) => {
        return 0;
    }
    return(
        <div>
            <form>
                <label>Order by: </label>
                <select value={selectedOrder} onChange={handleSelect}>
                    <option value = "Default" >Default</option>
                    <option value = "alphaAscen" >Alphabetically ↑</option>
                    <option value = "alphaDesc" >Alphabetically ↓</option>
                    <option value = "byForceAscen" >By Force ↑</option>
                    <option value = "byForceDesc" >By Force ↓</option>
                </select>
            </form>
        </div>
    );
}

const mapDispatchToProps = {
    setOrderPokemonsBy
}

export default connect(
    null,
    mapDispatchToProps
    )(OrderSelector);
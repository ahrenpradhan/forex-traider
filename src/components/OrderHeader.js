import React from 'react';

const getButtonClass = (x,y) => {
    if(x==y){
        return "Order--header__button Order--header__button__selected";
    }
    return "Order--header__button";
}

export default (props) => (
    <div>
        <button
            className={getButtonClass("OpenOrder",props.option)}
            onClick={() => props.handleHeaderButtons("OpenOrder")}
        >
            Open Order
        </button>
        <button
            className={getButtonClass("OrderHistory",props.option)}
            onClick={() => props.handleHeaderButtons("OrderHistory")}
        >
            Order History
        </button>
    </div>
)
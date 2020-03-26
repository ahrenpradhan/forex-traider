import React from 'react'

const getButtonClass = (x,y) => {
    if(x==y){
        return "header__button header__button__selected";
    }
    return "header__button";
}

export default (props) => (
    <div className="header">
        <h1 className="header__title"> FOREX Trader</h1>
        <div className="header__navbar">
            <button
                className={getButtonClass("Dashboard",props.option)}
                onClick={() => props.handleHeaderButtons("Dashboard")}
            >
                Dashboard
            </button>
            <button
                className={getButtonClass("ForexBots",props.option)}
                onClick={() => props.handleHeaderButtons("ForexBots")}
            >
                ForexBots
            </button>
            <button
                className={getButtonClass("Forecasts",props.option)}
                onClick={() => props.handleHeaderButtons("Forecasts")}
            >
                Forecasts
            </button>
            <button
                className={getButtonClass("User",props.option)}
                onClick={() => props.handleHeaderButtons("User")}
            >
                User
            </button>
        </div>
    </div>
)

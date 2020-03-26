import React from 'react';
import $ from 'jquery';
import Header from './Header';
import Dashboard from './Dashboard';
import ForexBots from './ForexBots';
import Forecasts from './Forecasts';
import User from './User';
import Footer from './Footer';

export default class Main extends React.Component {
    state = {
        page: "ForexBots"
    };
    handleHeaderButtons = (option) => this.setState(() => ({ page: option }))

    render() {
        return (
            <div>
                <Header
                    handleHeaderButtons={this.handleHeaderButtons}
                    option={this.state.page}
                />
                <div className="main" >
                    <div className="container" >
                        {this.state.page == "Dashboard" && <Dashboard />}
                        {this.state.page == "ForexBots" && <ForexBots />}
                        {this.state.page == "Forecasts" && <Forecasts />}
                        {this.state.page == "User" && <User />}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
import React from 'react';
import LineGraphs from './LineGraphs';
// import LineGraph2 from './LineGraph2';
import DonutGraph from './DonutGraph';

export default class Bookings extends React.Component {
    state = {
        FetchedData: {
            linegraphs: [
                {
                    x : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    y: [30, 40, 45, 50, 49, 60, 70, 91]
                },
                {
                    x : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    y: [36, 46, 46, 56, 46, 60, 76, 96]
                },
                {
                    x : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    y: [30, 40, 45, 50, 30, 40, 45, 91]
                },
                {
                    x : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    y: [30, 30, 40, 45, 49, 60, 70, 91]
                },
                {
                    x : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    y: [30, 30, 40, 45, 49, 60, 70, 91]
                },
                {
                    x : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    y: [30, 30, 40, 45, 49, 60, 70, 91]
                },
            ],
            donuts: {
                series: [44, 55, 41, 17, 15],
                labels: ['A', 'B', 'C', 'D', 'E']
            }
        },
        maingraphs: null
    };
    componentWillMount(){
        const settings = {
            "url": "https://api.tiingo.com/iex/ADT/prices?startDate=2019-01-01&endDate=2019-03-10&resampleFreq=20Min&token=f6deea4df3f704452993854b3d30e3ac4af6560b",
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function (response) {
            return response  
        }).then(data=>{
            this.setState(()=>{
                return {
                    maingraphs : {
                        low : data.map(e=>({y : e.low, x : new Date(e.date).getTime()})),
                        high : data.map(e=>({y : e.high, x : new Date(e.date).getTime()})),
                        close : data.map(e=>({y : e.close, x : new Date(e.date).getTime()})),
                        open : data.map(e=>({y : e.open, x : new Date(e.date).getTime()}))
                    }
                }
            })
        });
        // tez =this.getAPIData("2019-01-01","2019-01-05","2Min");
    }
    componentDidMount(prevProps, prevState) {
        try {
            // write your API calls here and overwrite the state.FetchedData using the this.setState() function
        } catch (e) {
            //Do nothing at all
        }
    }
    getAPIData(startDate,endDate,interval){
        const settings = {
            "url": `https://api.tiingo.com/iex/ADT/prices?startDate=${startDate}&endDate=${endDate}&resampleFreq=${interval}&token=f6deea4df3f704452993854b3d30e3ac4af6560b`,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function (response) {
            return response  
        })
    }
    render() {
        return (
            <div className="forexbots">
                <div className="forexbots--container">
                    <div className="forexbots--container__half">
                        {
                            !!this.state.maingraphs &&
                            <LineGraphs 
                                data={this.state.maingraphs}
                                width={565}
                            />
                        }
                    </div>
                    <div className="forexbots--container__half flexedContainer">
                        <div className="forexbots--container__half">portfolio chart 1</div>
                        <div className="forexbots--container__half">
                            <DonutGraph 
                                series={this.state.FetchedData.donuts.series}
                                labels={this.state.FetchedData.donuts.labels}
                            />
                            <div className="forex__buttonholder">
                                <center>
                                <button className="forexbots--start_stop__button red">STOP</button>
                                <br/>
                                <button className="forexbots--start_stop__button green">START</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forex--container__block">
                    <div className="forexbots--container2">
                        {/* {
                            this.state.FetchedData.linegraphs.map((e,i) => {
                                return (
                                    <div className="forebots--container__small"> 
                                        <LineGraphs 
                                            data = {e}
                                            width={300}
                                            key ={i}
                                        />
                                    </div>
                                )
                            })
                        } */}
                    </div>
                    <div className="forex--addbutton__container">
                        <button className="forex--addbutton">add</button>
                    </div>
                </div>
                <div className="forexbots--container">
                    <div className="forexbots--container23">Branch of tables</div>
                    <div className="forexbots--container13">Recent Actions</div>
                </div>
            </div>
        )
    }
}
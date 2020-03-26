import React from 'react';
import OrderHeader from './OrderHeader';

export default class OrderList extends React.Component{
    state = {
        page: "OpenOrder",
        fetchedData : [
            {
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open'
            }
        ]
    };
    handleHeaderButtons = (option) => this.setState(() => ({ page: option }))
    render() {
        return (
            <div>
                <OrderHeader 
                    handleHeaderButtons={this.handleHeaderButtons}
                    option={this.state.page}
                />
                <div className="Order--body">
                    {
                        this.state.page == "OpenOrder" && 
                        <OrderBody 
                            data={this.state.fetchedData} 
                            label={"Open Order"}
                        />
                    }
                    {
                        this.state.page == "OrderHistory" && 
                        <OrderBody 
                            data={this.state.fetchedData}
                            label={"Order History"}
                        />
                    }
                </div>
            </div>
        )
    }
}

const OrderBody = (props) => (
    <div>
        <h2>{props.label}</h2>
        <table>
            <thead>
                <tr>
                    <td>Sr no.</td>
                    <td>Name</td>
                    <td>Qty</td>
                    <td>Avg.Price</td>
                    <td>Profit/Loss</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((e,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{e.Name}</td>
                            <td>{e.Qty}</td>
                            <td>{e.AvgPrice}</td>
                            <td>{e.PL}</td>
                            <td>{e.Status}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)
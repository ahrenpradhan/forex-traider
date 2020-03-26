import React from 'react';
import OrderHeader from './OrderHeader';

export default class OrderList extends React.Component{
    state = {
        page: "OpenOrder",
        currentPage : 0,
        maxPage : null,
        fetchedData : [
            {
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },
        ],
        focusedData : null
    };
    componentWillMount(){
        if(this.state.maxPage == null){
            this.state.maxPage = (this.state.fetchedData.length/5) - 1;
        }
    }
    handlePagination = (val) => {
        if(val=='First'){
            this.setState({currentPage : 0});
        } else if(val=='Prev') {
            this.setState((prevState)=>({currentPage : prevState.currentPage - 1}));
        } else if(val=='Next') {
            this.setState((prevState)=>({currentPage : prevState.currentPage + 1}));
        } else {
            this.setState((prevState)=>({currentPage : prevState.maxPage}));
        }
    }
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
                <div className="OrderList--pagination">
                    <button 
                        className={(this.state.currentPage!==0)?"OrderList--paginationbutton":"OrderList--paginationbutton__selected"}
                        disabled={this.state.currentPage===0} 
                        onClick={()=> this.handlePagination('First')}
                    >
                        First
                    </button>
                    <button 
                        className={(this.state.currentPage!==0)?"OrderList--paginationbutton":"OrderList--paginationbutton__selected"}
                        disabled={this.state.currentPage===0} 
                        onClick={()=> this.handlePagination('Prev')}
                    >
                        Previous
                    </button>
                    <button 
                        className={(this.state.currentPage!==this.state.maxPage)?"OrderList--paginationbutton":"OrderList--paginationbutton__selected"}
                        disabled={this.state.currentPage===this.state.maxPage} 
                        onClick={()=> this.handlePagination('Next')}
                    >
                        Next
                    </button>
                    <button 
                        className={(this.state.currentPage!==this.state.maxPage)?"OrderList--paginationbutton":"OrderList--paginationbutton__selected"}
                        disabled={this.state.currentPage===this.state.maxPage} 
                        onClick={()=> this.handlePagination('Last')}
                    >
                        Last
                    </button>
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
                        <tr key={e+i}>
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
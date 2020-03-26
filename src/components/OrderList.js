import React from 'react';
import OrderHeader from './OrderHeader';

export default class OrderList extends React.Component{
    state = {
        page: "OpenOrder",
        currentPage : 0,
        maxPage : null,
        fetchedData : [
            {
                Name : 'abc1',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc2',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc3',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc4',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc5',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc6',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc7',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc8',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc9',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc10',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc11',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc12',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc13',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc14',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc15',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc16',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc17',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc18',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc19',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc20',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc21',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc22',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc23',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc24',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },{
                Name : 'abc25',
                Qty : 1,
                AvgPrice : '1$',
                PL : 1,
                Status : 'open',
                Date : '1'
            },
        ]
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
                            data={this.state.fetchedData.slice(this.state.currentPage*5,(this.state.currentPage*5)+5)} 
                            label={"Open Order"}
                            currentPage={this.state.currentPage}
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
        {/* <h2>{props.label}</h2> */}
        <table className="Order--Body__table">
            <center>
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Avg.Price</th>
                        <th>Profit/Loss</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((e,i)=>(
                            <tr key={e+i}>
                                <td>{(props.currentPage*5)+i+1}</td>
                                <td>{e.Name}</td>
                                <td>{e.Qty}</td>
                                <td>{e.AvgPrice}</td>
                                <td>{e.PL}</td>
                                <td>{e.Status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </center>
        </table>
    </div>
)
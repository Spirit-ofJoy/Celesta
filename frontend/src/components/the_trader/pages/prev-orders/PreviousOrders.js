import React from 'react';
import {Component} from 'react';

import OrderList from './OrderList';

class PreviousOrders extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            id: this.props.id,
            webLocation : this.props.web_loc, 
            OrderData : null
        };
    }

    componentDidMount(props) {
        let urlReq = this.state.webLocation+'trader/orders?id='+this.state.id;

        fetch(urlReq, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({OrderData:data}), console.log);
    }

    checkData = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="card" id="trader-prevOrder-container">
                <h1 style={{ margin: '30px' }}>Your Previous Orders </h1>
                {/* <button type="button" className="btn btn-primary" onClick={() => this.checkData() }></button> */}
                <OrderList data={this.state.OrderData} />
            </div>

        ); 
    }
}


let orderData = [
    {
        item: 'Coca-Cola',
        distrib: 'distrib-id',
        distrib_name: 'Hindustan Distributors',
        date: '12/01/2021'
    },
    {
        item: 'Coca-Cola',
        distrib: 'distrib-id',
        distrib_name: 'Raj Distributors',
        date: '31/12/2020 '
    },
    {
        item: 'Limca',
        distrib: 'distrib-id',
        distrib_name: 'Raj Distributors',
        date: '22/12/2020'
    }
]

export default PreviousOrders;
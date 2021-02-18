import React from 'react';

import OrderList from './OrderList';

const PreviousOrders = (props) => {

    return (
        <div className="card" id="trader-prevOrder-container">
            <h1 style={{margin:'30px'}}>Your Previous Orders</h1>
            <OrderList data={orderData}/>
        </div>

    ); 
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
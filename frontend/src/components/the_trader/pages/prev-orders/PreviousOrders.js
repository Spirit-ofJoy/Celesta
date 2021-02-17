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
        distrib_name: 'Wa Luigi',
        date: '12/10/200 BC'
    },
    {
        item: 'Timber',
        distrib: 'distrib-id',
        distrib_name: 'Florida Man',
        date: '12/12/2012 '
    },
    {
        item: 'Limca',
        distrib: 'distrib-id',
        distrib_name: 'Itz ah meeeee, Mario',
        date: '22/12/2020'
    }
]

export default PreviousOrders;
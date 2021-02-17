import React from 'react';

import CurrentList from './CurrentItemList';

const Price = (props) => {

    let possibleData = [
        {
            item:'Coca-Cola',
            unit:30,
            price:899
        },
        {
            item:'Limca',
            unit:40,
            price:1099
        }
    ]

    

    return (
        <div className="card" id="distributor-item-container" style={{paddingBottom:'50px'}}>
            <h1 style={{margin:'30px'}}>Modify Catalogue</h1>
            <CurrentList data={possibleData}/>
        </div>

    ); 
}

export default Price;
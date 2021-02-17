import React from 'react';

import CurrentItem from './CurrentItemCard';

const Price = (props) => {

    return (
        <div className="card" id="trader-browse-container">
            <h1 style={{margin:'30px'}}>Modify Catalogue</h1>
            <CurrentItem />
        </div>

    ); 
}

export default Price;
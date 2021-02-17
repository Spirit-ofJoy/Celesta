import React from 'react';

import CurrentItemCard from './CurrentItemCard';

const CurrentItemList = (props) => {
    return( 
        <div className="CurrItemList-container" style={{width: '80%', justifyContent: 'center', alignItems: 'center', marginLeft:'10%'}}>
                
                {
                    props.data.map((itemDetails, i) => {
                        
                        return (
                            <CurrentItemCard 
                                key={i /*For React to identify each item-card through key*/}
                                item={props.data[i] /*Distributor selling*/}
                            />
                        );
                    })
                }
            </div>
    );
        
    
}

export default CurrentItemList;
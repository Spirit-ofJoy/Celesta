import React  from 'react';

import ItemCard from './ItemCard';

const BrowseList = (props) => {

        //Dynamic list of choices
        return (
            <div className="BrowseList-container" style={{width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
                
                {
                    props.data.distribs.map((itemDetails, i) => {
                        
                        return (
                            <ItemCard 
                                key={i /*For React to identify each item-card through key*/}
                                item={props.data.item /*Item to display*/} 
                                distributor={props.data.distribs[i] /*Distributor selling*/}
                            />
                        );
                    })
                }
            </div>
        );
    }
    

export default BrowseList;
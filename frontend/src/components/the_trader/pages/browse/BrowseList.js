import React  from 'react';

import ItemCard from './ItemCard';

const BrowseList = (props) => {

    if(!props.data) {
        return (
            <div></div>
        )
    }
    else {

        //Dynamic list of choices
        return (
            <div className="BrowseList-container" style={{width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'#e0e0e0'}}>
                
                {
                    props.data.map((itemDetails, i) => {
                        
                        return (
                            <ItemCard 
                                key={i /*For React to identify each item-card through key*/}
                                item={props.data[i] /*Item to display*/} 
                            />
                        );
                    })
                }
            </div>
        );
    }
}    

export default BrowseList;
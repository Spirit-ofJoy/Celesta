import React, {useState} from 'react';

import ItemModal from './ItemModal'

const ItemCard = (props) => {

    const [item_isOpen, item_setIsOpen] = useState(false);

    console.log(props);
    
    return (

        <div className="card" style={{ maxWidth: '60%', marginTop: '20px', marginLeft: '20%', marginBottom: '20px'}}>
            <div className="card-header">
                <div className="row">
                    <h4 className="col">{props.item.name}</h4>
                    <button type="button" className="btn btn-danger col align-self-end" style={{ maxWidth: 'fit-content' }} onClick={() => item_setIsOpen(true) }>View Details</button>
                    <ItemModal open={item_isOpen} close ={() => {item_setIsOpen(false)} } item={props.item}/>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <h5 className="col">{props.distributor.name}</h5>
                    <button type="button" className="btn btn-primary col align-self-end" style={{ maxWidth: 'fit-content' }}>View Profile</button>
                </div>
            </div>

            <div className="card-footer bg-info">
                <div className="row">
                    <div className="col-3 align-self-start">
                        <h6>Price per Carton</h6>
                        <h6>{props.distributor.cost}</h6>
                    </div>
                    <div className="col-3">
                        <h6>Units per Carton</h6>
                        <h6>{props.distributor.carton}</h6>
                    </div>
                    <div className="col-4"> </div>
                    <button type="button" className="btn btn-dark col-2 align-self-end" style={{ maxWidth: 150 }}>View on Map</button>
                </div>
            </div>
        </div>

    ); 
}

export default ItemCard;

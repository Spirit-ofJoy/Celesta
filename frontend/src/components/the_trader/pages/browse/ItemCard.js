import React, {useState} from 'react';

import ItemModal from './ItemModal'
import MapModal from './MapModal'

import './ItemCard.css';

const ItemCard = (props) => {

    const [item_isOpen, item_setIsOpen] = useState(false);
    const [map_isOpen, map_setIsOpen] = useState(false);

    console.log(props);
    
    return (

        <div className="card browse-list-item-card" style={{ maxWidth: '70%', marginTop: '20px', marginLeft: '15%'}}>
            <div className="card-header browse-list-item-card-header-outer-div">
                <div className="row browse-list-item-card-header-inner-div position-relative">
                    <h4 className="col-11 browse-list-item-card-header-item-name">{props.item.name}</h4>
                    <button type="button" className="col-3 align-self-end button-primary-class-header button-primary-class top-button" style={{ maxWidth: 'fit-content',height:'auto' }} onClick={() => item_setIsOpen(true) }>More Details   <i className="ri-arrow-right-s-line arrow-pointer-item-card"></i></button>
                    <ItemModal open={item_isOpen} close ={() => {item_setIsOpen(false)} } item={props.item}/>
                </div>
            </div>

            <div className="card-body browse-list-item-card-distributor-name-outer-div">
                <div className="row browse-list-item-card-distributor-name-inner-div position-relative">
                    <h5 className="col-11 browse-item-card-distributor-name-distributor-name">{props.distributor.name}</h5>
                    <button type="button" className="col-3 align-self-end button-primary-class middle-button" style={{ maxWidth: 'fit-content' }}>View Profile <i className="ri-arrow-right-s-line arrow-pointer-item-card"></i></button>
                </div>
            </div>

            <div className="card-footer browse-item-card-footer-outer-div">
                <div className="row browse-item-card-footer-inner-div position-relative">
                    <div className="col-6 align-self-start padding-extra">
                        <h6>Price per Carton</h6>
                        <h6>{props.distributor.cost}</h6>
                    </div>
                    <div className="col-3 padding-extra">
                        <h6>Units per Carton</h6>
                        <h6>{props.distributor.carton}</h6>
                    </div>
                    <div className="col-4"> </div>
                    <button type="button" className="col-3 align-self-end button-primary-class bottom-button" style={{ maxWidth: 150 }} onClick={() => map_setIsOpen(true) } >View on Map</button>
                    <MapModal open={map_isOpen} close ={() => {map_setIsOpen(false)} } location={props.distributor.location}/>
                </div>
            </div>
        </div>

    ); 
}

export default ItemCard;

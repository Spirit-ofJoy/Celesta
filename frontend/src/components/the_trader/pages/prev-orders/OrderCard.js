import React, {useState} from 'react';
import "./OrderCard.css";

const OrderCard = (props) => {

    //console.log(props);
    
    return (

        <div className="card" style={{ maxWidth: '60%', marginTop: '20px', marginLeft: '20%', marginBottom: '20px', boxShadow:' 0 5px 12px 2px rgb(192, 192, 192)'}}>
            <div className="card-header">
                <div className="row">
                    <h4 className="col">{props.order.item}</h4>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <h5 className="col">{props.order.distributor}</h5>
                    <button type="button" className="btn btn-primary col align-self-end orders-view-profile-button" style={{ maxWidth: 'fit-content' }}>View Profile  <i className="ri-arrow-right-s-line orders-view-profile-icon"></i></button>
                </div>
            </div>

            <div className="card-footer">
                <h5 className="text-muted">Date of Order:</h5>
                <h5>{props.order.ordered_on}</h5>
            </div>
        </div>

    ); 
}

export default OrderCard;
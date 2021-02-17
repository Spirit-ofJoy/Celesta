import React, {useState} from 'react';

const OrderCard = (props) => {

    console.log(props);
    
    return (

        <div className="card" style={{ maxWidth: '60%', marginTop: '20px', marginLeft: '20%', marginBottom: '20px'}}>
            <div className="card-header">
                <div className="row">
                    <h4 className="col">{props.order.item}</h4>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <h5 className="col">{props.order.distrib_name}</h5>
                    <button type="button" className="btn btn-primary col align-self-end" style={{ maxWidth: 'fit-content' }}>View Profile</button>
                </div>
            </div>

            <div className="card-footer bg-info">
                <h5 className="text-muted">Date of Order:</h5>
                <h5>{props.order.date}</h5>
            </div>
        </div>

    ); 
}

export default OrderCard;
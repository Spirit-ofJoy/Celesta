import React from 'react';

import './Details.css';
import EditCmpnt from './EditComponent';

const Details = (props) => {

    return( 
        <div className="card" id="trader-details-container">
            <h1>My Details</h1>
            <hr style= { { width: '90%', marginLeft: '5%', height: '3px', color: 'black'} } />
            <EditCmpnt field="Name" fieldValue="Sad Keanu"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="E-Mail" fieldValue="dream-within-a-dream@inception.com"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="Phone" fieldValue="+666 42011 11169"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <button type="button" className="btn btn-success">Submit Changes</button>
        </div>

    ); 
}

export default Details;
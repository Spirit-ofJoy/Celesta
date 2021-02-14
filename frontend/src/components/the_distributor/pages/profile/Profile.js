import React from 'react';

import './Profile.css';
import EditCmpnt from './EditComponent';

const Profile = (props) => {

    return( 
        <div className="card" id="distributor-details-container">
            <h1>Edit Profile Details</h1>
            <hr style= { { width: '90%', marginLeft: '5%', height: '3px', color: 'black'} } />
            <EditCmpnt field="Name" fieldValue="NAME OF THE DISTRIBUTOR"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="Address" fieldValue="WE LIVE WHERE SATAN'S AFRAID OF US"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="District" fieldValue="DISTRICT"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="State" fieldValue="STATE"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="Description" fieldValue="We sell real people"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="E-Mail" fieldValue="dream-within-a-dream@inception.com"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="Contact" fieldValue="+666 42011 11169"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="Website" fieldValue="fnf.com"/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <button type="button" className="btn btn-success">Submit Changes</button>
        </div>

    ); 
}

export default Profile;
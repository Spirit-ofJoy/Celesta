import React from 'react';

import './Details.css';
import EditCmpnt from './EditComponent';

let traderName;
let phoneNo;

const Details = (props) => {

    traderName = props.name;
    phoneNo = props.phone;

    const changeDetails = () => {
        let urlReq = props.web_loc+'trader/update/profile?id='+props.id+'&name='+traderName+'&contact='+phoneNo;
        console.log(traderName+" "+phoneNo);
    
        fetch(urlReq, {
            method: "POST",
        })
        .then(response => console.log(response));
    }

    const changeName = (value) => {
        traderName = value;
        console.log(traderName);
    }

    const changePhone = (value) => {
        phoneNo = value;
        console.log(phoneNo)
    }

    return( 
        <div className="card" id="trader-details-container">
            <h1 style= { { textTransform:'uppercase',fontSize:'32px',letterSpacing:'2px'} } >My Details</h1>
            <hr style= { { width: '90%', marginLeft: '5%', height: '2.25px', color: 'black'} } />
            <EditCmpnt field="Name" fieldValue={props.name} change={changeName}/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <EditCmpnt field="Phone" fieldValue={props.phone} change={changePhone}/>
            <hr style= { { width: '90%', marginLeft: '5%'} } />
            <button type="button" className="btn button-my-details-page" onClick={() => changeDetails()}>Submit Changes</button>
        </div>

    ); 
}


export default Details;
import React from 'react';

const Welcome = (props) => {
    
    return (
        <div className="card" id="trader-welcome-container" style={{padding: '50px'}}>
            <h1>Welcome Trader</h1>
             <button type="button" onClick={() => props.check()}>check</button> 
        </div>

    ); 
}

export default Welcome;
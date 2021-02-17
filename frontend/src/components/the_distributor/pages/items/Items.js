import React from 'react';

const Items = (props) => {

    return (
        <div className="card" style={{paddingBottom:'50px'}}>
            <h1 style={{margin:'30px'}}>Add Items to Selection</h1>
            <hr style= { { width: '100%', height: '3px', color: 'black'} } />
            
            <div style={{ width: '80%', paddingLeft: '15%' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Item Name:</span>
                    <input type="text" className="form-control" placeholder="Item Name" aria-label="ItemName" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Brand Name:</span>
                    <input type="text" className="form-control" placeholder="Brand Name" aria-label="BrandName" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group">
                    <span className="input-group-text">Item Description</span>
                    <textarea className="form-control" aria-label="Description" placeholder="Short Description of Item"></textarea>
                </div>
                <div className="input-group" style={{marginTop:'12px', marginBottom:'12px'}}>
                    <span className="input-group-text">Possible Tags:</span>
                    <textarea className="form-control" aria-label="Tag" placeholder="Write possible tags (Start each tag with '#' on new line)"></textarea>
                </div>
                <h6>If you plan on selling. What is the price you offer?</h6>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Items per carton:</span>
                    <input type="text" className="form-control" placeholder="Number of pieces of carton" aria-label="CartonQuantity" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Price of carton:</span>
                    <input type="text" className="form-control" placeholder="Cost of carton" aria-label="CartonCost" aria-describedby="basic-addon1" />
                </div>
                <button type="button" className="btn btn-success">Submit Item Idea</button>
            </div>
        </div>

    ); 
}

export default Items;
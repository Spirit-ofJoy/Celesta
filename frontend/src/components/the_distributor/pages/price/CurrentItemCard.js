import React from 'react';

const CurrentItemCard = (props) => {

    let allowUnitEdit = false;
    let inputUnit;
    const processUnitEdit = () => {
        allowUnitEdit=(!allowUnitEdit); 
        if(allowUnitEdit){ inputUnit.disabled=false; }
        if(!allowUnitEdit){ inputUnit.disabled=true; }
    }

    let allowPriceEdit = false;
    let inputPrice;
    const processPriceEdit = () => {
        allowPriceEdit=(!allowPriceEdit); 
        if(allowPriceEdit){ inputPrice.disabled=false; }
        if(!allowPriceEdit){ inputPrice.disabled=true; }
    }

    return (
        <div class="card" style={{width:'100%', marginTop:'20px'}}>
            <div class="card-header">
                <h5>{props.item.item}</h5>
            </div>

            <div class="card-body">
                <h6 class="card-title text-muted">Units per carton:</h6>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" defaultValue={props.item.unit} disabled={true} ref={editUnit => (inputUnit = editUnit)} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={processUnitEdit}>Edit field</button>
                </div>

                <h6 class="card-title text-muted">Price each carton:</h6>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" defaultValue={props.item.price} disabled={true} ref={editPrice => (inputPrice = editPrice)} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={processPriceEdit}>Edit field</button>
                </div>
                
            </div>
        </div>
    );
}

export default CurrentItemCard;
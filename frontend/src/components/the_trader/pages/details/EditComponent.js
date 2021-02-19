import React from 'react';

const EditComponent = (props) => {

    let allowEdit = false;
    let input;
    const processEdit = () => {
        allowEdit=(!allowEdit); 
        if(allowEdit){ input.disabled=false; }
        if(!allowEdit){ input.disabled=true; }
    }

    return(
        <div className="trader-profile-edit-component" style={{textAlign:'left'}}>
            <h5>{props.field}</h5>
            <div className="input-group mb-3" style={{width:'100%', float:'left'}}>
                <input type="text" className="form-control" defaultValue={props.fieldValue} disabled={true} ref={editField => (input = editField) } onChange={(e)=> props.change(e.target.value)}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={ processEdit }>Edit field</button>
            </div>
        </div>
    )
}

export default EditComponent;
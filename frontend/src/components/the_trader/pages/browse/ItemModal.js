import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '560px',
    padding: '10px',
    zIndex: 1000
}
const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

const ItemModal = (props) => {
    if(!props.open) {
        return null;
    }
    else {
        return ReactDOM.createPortal(
            
            <>
                <div style={OVERLAY_STYLE}>
                    <div style={MODAL_STYLE}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{props.item.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.close}></button>
                        </div>
                        <div class="modal-body">
                            <h6 className="text-muted">Description</h6>
                            <h6>{props.item.description}</h6>
                        </div>
                        <div class="modal-footer">
                            <h6 className="text-muted">Made By:</h6><h6>{props.item.brand}</h6>
                        </div>
                    </div>
                    </div>
                </div>
            </>,
            document.getElementById('modal-portal')
        )
    }
}

export default ItemModal;
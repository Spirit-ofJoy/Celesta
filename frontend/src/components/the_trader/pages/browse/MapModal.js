import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
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

const MapModal = (props) => {

    let mapLocation = 'https://maps.google.com/maps?q=' +props.location +'&z=15&output=embed' ;

    if(!props.open) {
        return null;
    }
    else {
        return ReactDOM.createPortal(
            
            <>
                <div style={OVERLAY_STYLE}>
                    <div style={MODAL_STYLE}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Location on Map</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.close}></button>
                        </div>
                        <div className="modal-body">
                            <div id="map" style={{width:'700px', height:'500px', backgroundColor:'black'}}>
                                <iframe src={mapLocation} width="700px" height="500px" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>,
            document.getElementById('modal-portal')
        )
    }
}

export default MapModal;
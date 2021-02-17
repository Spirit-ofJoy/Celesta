import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SearchBar = (props) => {
    
    const options = [
        'Product', 'Brand', 'Tag'
    ];

    return (
        <div className="row justify-content-center" style={{ height: '45px', width: '100%', margin:'20px' }}>
            <div className="col-6">
                <input type="text" placeholder="Enter searching value" aria-label="Search-value" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="col-2">
            <label class="input-group-text" style={{ height: '100%', width: '100%', left: '0' }}>Search Using:</label>
            </div>
            <div className="col-2">
                <Dropdown options={options} placeholder="Select a Search Option" onChange={(e) => props.changeOption(e.value)} />
            </div> 
        </div>   
    );
}

export default SearchBar;
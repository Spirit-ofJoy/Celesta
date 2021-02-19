import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./SearchBar.css";

const SearchBar = (props) => {
    
    const options = [
        'product', 'brand', 'tag'
    ];

    return (
        <div className="search_bar_row row justify-content-center" style={{ height: 'auto', width: '100%', margin:'20px' }}>
            <div className="col-5">
                <input className="input_text_search_query" type="text" placeholder="Enter searching value" aria-label="Search-value" style={{ height: '100%', width: '100%', padding: '0px 20px'}} id="browse-field" onChange={() => props.changeSearchField(document.getElementById('browse-field').value)}/>
            </div>
            <div className="col-2">
                <label className="input-group-text" style={{ height: '100%', width: '100%', left: '0' }}>Search Using:</label>
            </div>
            <div className="col-2">
                <Dropdown className="search_options" options={options} placeholder="Select a Search Option" id="browse-choice" onChange={(e) => props.changeOption(e.value)} />
            </div> 
            <button type="button" className="col-1 search-icon-div-box" onClick={() => props.loadBrowse()}>
                <i className="ri-search-line search-icon"></i>
            </button> 
        </div>   
    );
}

export default SearchBar;
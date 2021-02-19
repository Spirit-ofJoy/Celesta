import React, { Component } from 'react';

import SearchBar from './SearchBar';
import BrowseList from './BrowseList';
import './Browse.css';
import { render } from '@testing-library/react';

class Browse extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            current_option: 'brand',
            searchField : " ",
            data : this.props.data, 
            webLocation : this.props.web_loc, 
            BrowsingData : null
        };
    }
    
    changeOption = (option) => {
        this.setState({current_option: option, searchField: this.state.searchField});
        //console.log(this.state.BrowsingData);
    }

    changeSearchField = (value) => {
        this.setState({searchField: value});
    }

    loadBrowse = () => {
        let urlReq = this.state.webLocation+"search/item?search="+this.state.searchField+"&search_in="+this.state.current_option;
        console.log(urlReq);

        fetch(urlReq, {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(response => response.json())
        .then(data => this.setState({BrowsingData: data}));
    }
    
    render() {

    return (
        <div className="card" id="trader-browse-container">
            <h1 id="browse_heading" style={{ margin: '30px' }}>Browse</h1>
            <SearchBar changeOption={this.changeOption} changeSearchField={this.changeSearchField} loadBrowse={this.loadBrowse} />
            <BrowseList data={this.state.BrowsingData} />
        </div>

    );
}
}

let data = {
    item: {
        name: 'Bhujia',
        description: 'A popular crispy snack prepared by using moth beans and besan (gram flour) and spices',
        brand: 'Haldi-Ram'
    },
    distribs: [
        {
            id:'distrib_id1',
            location:'27.200927,78.008363',
            name:'Raj Distributors',
            cost: 2000,
            carton: 50
        },
        {
            id:'distrib_id2',
            location:'27.189405,77.998812',
            name:'Hindustan Distributors',
            cost: 700,
            carton: 10
        }
    ]
}

export default Browse;
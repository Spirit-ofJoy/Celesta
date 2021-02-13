import React from 'react';
import { Component } from 'react';

import './Profile.css';

let distributor = {
    name: 'NAME OF THE DISTRIBUTOR',
    address: 'WE LIVE WHERE SATAN\'S AFRAID OF US',
    district: 'District',
    state: 'State',
    rate: '4.5',
    contact_no: '+275098207359',
    email: 'fastnfrious@fnf.com',
    website: 'fnf.com',
    description: 'We sell real people'
}

class Profile extends Component {


    render() {
        return(
            <div className="trader-profile-container">
                <div className="cover-image-div"></div>
                <div className="cover-image-show" />

                <div className="profile-main" align="justify">
                    <div className="distributor-profile">
                        <div className="container">
                            <div className="row name-address underline-separation-below">
                                
                                <div className="col-12 d-flex align-items-center">
                                    <div className="container">
                                        <div className="row">
                                            <h1 className="distrib-name">{distributor.name}</h1>
                                        </div>
                                        <div className="row">
                                            <h3 className="distrib-address">Address<br />{distributor.address}</h3>
                                        </div>
                                        <div className="row">
                                            <div className=" col d-flex justify-content-start">
                                                <h2 className="distrib-rating">{distributor.rate}<i className="bi bi-star" /></h2>
                                            </div>
                                            <div className=" col d-flex justify-content-end">
                                                <h2 className="distrib-district-state">{distributor.district}, {distributor.state}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row underline-separation-below">
                                <div className="col-6 d-flex align-items-stretch">
                                    <div className="containers distrib-contact-details">
                                        <div className="row">
                                            <h4 className="page-section-title">
                                                Contact Number
                                            </h4>
                                        </div>
                                        <div className="row">
                                            <p className="contact-text-indentation">{distributor.contact_no}</p>
                                        </div>
                                        <div className="row">
                                            <h4 className="page-section-title">
                                                E-mail Address
                                            </h4>
                                        </div>
                                        <div className="row">
                                            <p className="contact-text-indentation">{distributor.email}</p>
                                        </div>
                                        <div className="row">
                                            <h4 className="page-section-title">
                                                Website
                                            </h4>
                                        </div>
                                        <div className="row">
                                            <p className="contact-text-indentation">{distributor.website}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 d-flex align-items-stretch">
                                    <div className="containers distrib-contact-details">
                                        <div className="row">
                                            <h4 className="page-section-title">
                                                Description
                                            </h4>
                                        </div>
                                        <div className="row">
                                            <p className="contact-text-indentation">{distributor.description}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ADD THE CLASS class="map" to the iframe fo proper working of the map */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.8169107548!2d72.94602157780442!3d33.61632322373705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sin!4v1612974190377!5m2!1sen!2sin" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} className="map">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;
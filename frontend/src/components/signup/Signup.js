import React from 'react';
import { Component } from 'react';

import {Link , BrowserRouter , Switch , Route} from 'react-router-dom' ;

import './signup.css';

class Signup extends Component {
  render()
  {
    return (
      <div>
        {/*Waves Container*/}
        <div className="background">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x={4} y={0} fill="rgba(36, 101, 255,0.7)" />
              <use xlinkHref="#gentle-wave" x={4} y={3} fill="rgba(36, 101, 255,0.5)" />
              <use xlinkHref="#gentle-wave" x={4} y={5} fill="rgba(36, 101, 255,0.3)" />
              <use xlinkHref="#gentle-wave" x={4} y={7} fill="rgba(36, 101, 255,1)" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
        <main className="main">
          {/*-----------------------------------------------------------FOR SYSTEMS OTHER THAN DISTRIBUTIONS------------------------------------------------------*/}
          <div id="for-others">
            <div className="top">
              {/*------------------------------HEADING OF THE SIGN UP PAGE.--------------------------------*/}
              <h1 className="heading">
                for BUSINESSES / INDUSTRIES
              </h1>
              <h2 className="sub-heading">
                Are you a distributor?<br />
                {/*------------------------------Button for changing the Sign Up page for Distributor and Businesses--------------------------------*/}

                {/*------------------------------Buttons Ends------------------------------*/}
              </h2>

              <div className="signup-Switch"><Link to="/signup/Signup_distributor"><button type ="button" id="switch-Signup-linking">Distributor</button></Link></div>

            </div>
            {/*------------------------------Form Container------------------------------*/}
            <div className="container">
              <div className="form-group">
                {/*-----------------------------bni stands for business and industries. see just below in the tag name----------------------*/}
                <input type="text" className="form-control form-input-text" id="bni_name" aria-describedby="emailHelp" placeholder="Name of the Distributorship" required />
                <label className="form-label" htmlFor="Distributorship">NAME OF YOUR BUSINESS SHOP / INDUSTRY</label>
                {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small> */}
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-input-text" id="bni_email" placeholder="Enter Email Address" required />
                <label className="form-label" htmlFor="inputZip">E-mail Address</label>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="password" className="form-control form-input-text" id="bni_password" placeholder="Password" required />
                  <label className="form-label" htmlFor="password">Password</label>
                  {/*this warning appears if password re entered do not match. Front end Part*/}
                  <small id="password-mismatch" className="form-text text-muted shift-up warning">The Passwords entered do
                    not
                    match</small>
                </div>
                <div className="form-group col-md-6">
                  <input type="password" className="form-control form-input-text" id="bni_password_reenter" placeholder="Re-Enter Password" required />
                  <label className="form-label" htmlFor="re-enter password">Re-Enter Password</label>
                </div>
              </div>
              {/*Check if the input is actually a number. Front end part. Complete this. Not yet completed*/}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control form-input-text" id="bni_phone" placeholder="Contact Number" required />
                  <label className="form-label" htmlFor="contact-number">Office Contact Number</label>
                </div>
              </div>
              {/*------------------------Address Multiple line inputs------------------------*/}
              {/*We have to manually add text input from these 4 lines of
                        input for that it can easily be interpreted and used by server */}
              <div className="form-group">
                <input type="text" className="form-control form-input-text" id="bni_address_line1" placeholder="Address Line 1" required />
                <input type="text" className="form-control form-input-text" id="bni_address_line2" placeholder="Address Line 2" required />
                <input type="text" className="form-control form-input-text" id="bni_address_line3" placeholder="Address Line 3" />
                <input type="text" className="form-control form-input-text" id="bni_address_line4" placeholder="Address Line 4" />
                <label className="form-label address-label" htmlFor="inputAddress">Address</label>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control form-input-text" id="bni_city" placeholder="Enter City" required />
                  <label className="form-label" htmlFor="inputCity">City</label>
                </div>
                <div className="form-group col-md-4">
                  <select id="inputState" className="form-control form-select-text" required>
                    <option />
                    <option>Andaman and Nicobar</option>
                    <option>Andhra Pradesh</option>
                    <option>Assam</option>
                    <option>Arunachal Pradesh</option>
                    <option>Bihar</option>
                    <option>Chandigarh</option>
                    <option>Chhattisgarh</option>
                    <option>Dadra and Nagar Haveli</option>
                    <option>Daman and Diu</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jammu and Kashmir</option>
                    <option>Jharkhand</option>
                    <option>West Bengal</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Lakshadweep</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Orissa</option>
                    <option>Pondicherry</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Tripura</option>
                    <option>Uttaranchal</option>
                    <option>Uttar Pradesh</option>
                  </select>
                  <label className="form-label" htmlFor="inputState">State</label>
                </div>
                <div className="form-group col-md-2">
                  <input type="text" className="form-control form-input-text" id="bni_zipcode" placeholder="Enter Zip Code" />
                  <label className="form-label" htmlFor="inputZip">Zip Code</label>
                </div>
              </div>
              {/*Text Input Ends*/}
              <button type="submit" className="submit-button" id="bni_signup">Sign Up</button>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Signup;

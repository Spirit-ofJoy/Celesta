import React from 'react';
import { Component } from 'react';

import {Link , BrowserRouter , Switch , Route  } from 'react-router-dom' ;

import './signup.css';

class Signup_distributor extends Component {


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
          {/*-----------------------------------------------------------FOR  DISTRIBUTORS------------------------------------------------------*/}
          <div id="for-distributor">
            <div className="top">
              <h1 className="heading">
                for Distributors
              </h1>
              <h2 className="sub-heading">
                Are you from a Business or an Industry?<br />
                </h2>
                <div className="signup-Switch"><Link to="/signup"><button type ="button" id="switch-Signup-linking" className="btn btn-primary">Sign-Up as a Trader</button></Link>{/*Do styling of this button*/}
              </div>
            </div>
            <div className="container">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control form-input-text" id="distributor_name" aria-describedby="emailHelp" placeholder="Name of the Distributorship" required />
                  <label className="form-label" htmlFor="Distributorship">Distributorship</label>
                  {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small> */}
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-input-text" id="distributor_email" placeholder="Enter Email Address" required />
                  <label className="form-label" htmlFor="inputZip">E-mail Address</label>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="password" className="form-control form-input-text" id="distributor_password" placeholder="Password" />
                    <label className="form-label" htmlFor="password">Password</label>
                    {/*this warning appears if password re entered do not match. Front end Part*/}
                    <small id="password-mismatch" className="form-text text-muted shift-up warning">The Passwords entered do
                      not
                      match</small>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="password" className="form-control form-input-text" id="distributor_password_reenter" placeholder="Re-Enter Password" required />
                    <label className="form-label" htmlFor="re-enter password">Re-Enter Password</label>
                  </div>
                </div>
                <div className="form-row">
                  {/*Check if the input is actually a number. Front end part. Complete this. Not yet completed*/}
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control form-input-text" id="distributor_phone" placeholder="Contact Number" required />
                    <label className="form-label" htmlFor="contact-number">Contact Number</label>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control form-input-text" id="distributor_brand" placeholder="Brand" required />
                    <label className="form-label" htmlFor="brand">Brand</label>
                  </div>
                </div>
                {/*------------------------Address Multiple line inputs------------------------*/}
                {/*We have to manually add text input from these 4 lines of
                        input for that it can easily be interpreted and used by server */}
                <div className="form-group">
                  <input type="text" className="form-control form-input-text" id="distributor_address_line1" placeholder="Address Line 1" required />
                  <input type="text" className="form-control form-input-text" id="distributor_address_line2" placeholder="Address Line 2" required />
                  <input type="text" className="form-control form-input-text" id="distributor_address_line3" placeholder="Address Line 3" />
                  <input type="text" className="form-control form-input-text" id="distributor_address_line4" placeholder="Address Line 4" />
                  <label className="form-label address-label" htmlFor="inputAddress">Address</label>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control form-input-text" id="distributor_city" placeholder="Enter City" required />
                    <label className="form-label" htmlFor="inputCity">City</label>
                  </div>
                  <div className="form-group col-md-4">
                    <select id="distributor_state" className="form-control form-select-text" required>
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
                    <input type="text" className="form-control form-input-text" id="distributor_zipcode" placeholder="Enter Zip Code" />
                    <label className="form-label" htmlFor="inputZip">Zip Code</label>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control form-input-text form-multiple-line-input-text" name="message" id="distributor_description" rows={6} data-rule="required" data-msg placeholder="Please write something to describe yourself to the buyers" defaultValue={""} />
                  <label className="form-multiple-line-input-label" htmlFor="inputZip" required>Description</label>
                </div>
                {/*Text Input Ends*/}


                <button type="submit" className="submit-button" id="distributor_signup">Sign Up</button>
              </form>
            </div>
          </div>
        </main>
      </div>
      )
    }
  }
  export default Signup_distributor;

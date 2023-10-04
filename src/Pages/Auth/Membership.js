import React from 'react'
import '../Auth/Css/Membership.css';
import image from '../Auth/images/1111.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const data = [
  { id: 1, title: "Card 1", description: "Description 1" },

];
const Membership = () => {
  return (
    <>

      <div style={{ display: 'flex', flexWrap: 'wrap' , marginLeft:"17.5%"}} >
        <link href='https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css' rel='stylesheet' />
        <link href='' rel='stylesheet' />

        <script type='text/javascript' src=''></script>
        <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'></script>
        <script type='text/javascript' src='https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js'></script>
        <script type='text/javascript'></script>
        <div class="demo">
          <div class="container">
            <div class="row">
              {/* <div class="col-md-3 col-sm-6" style={{width:"40vh"}}>
                <div class="pricingTable">
                  <div class="pricingTable-header">
                    <i class="fa fa-adjust"></i>
                    <div class="price-value"> $10.00 <span class="month">per month</span> </div>
                  </div>
                  <h3 class="heading">Standard</h3>
                  <div class="pricing-content">
                    <ul>
                      <li><b>50GB</b> Disk Space</li>
                      <li><b>50</b> Email Accounts</li>
                      <li><b>50GB</b> Monthly Bandwidth</li>
                      <li><b>10</b> subdomains</li>
                      <li><b>15</b> Domains</li>
                    </ul>
                  </div>
                  <div class="pricingTable-BuyNow">
                    <a href="#">Buy Now</a>
                  </div>
                </div>
              </div> */}

              <div className="col-md-3 col-sm-6"  style={{width:"40vh"}}>
                <div className="pricingTable green">
                  <div className="pricingTable-header">
                    <i className="fa fa-briefcase"></i>
                    <h4>Noob</h4>
                    <div className="price-value"> $00.00 <span className="month">per month</span> </div>
                  </div>
                  <h3 className="heading">Free</h3>
                  <div className="pricing-content"  style={{paddingTop:"5%"}}>
                    <ul>
                      <li><b><FontAwesomeIcon icon={faCheck} beatFade /></b> Book Slot For Game</li>
                      <div  style={{paddingTop:"10%"}}></div>
                      <li><b><FontAwesomeIcon icon={faCheck} beatFade /></b> Apply For Our Game Card</li>
                      <div  style={{paddingTop:"10%"}}></div>
                      <li><b><FontAwesomeIcon icon={faXmark} beatFade /></b> Book All Type Of Game</li>
                    </ul>
                  </div>
                  <div className="pricingTable-BuyNow">
                    <a href="#">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 ml-5" style={{width:"40vh"}}>
                <div className="pricingTable blue">
                  <div className="pricingTable-header">
                    <i className="fa fa-diamond"></i>
                    <h4>ABC</h4>
                    <div className="price-value"> $199 <span className="month">per month</span> </div>
                  </div>
                  <h3 className="heading">Premium</h3>
                  <div className="pricing-content" style={{paddingTop:"5%"}}>
                    <ul>
                    <li><b><FontAwesomeIcon icon={faCheck} beatFade /></b> Book Slot For Game</li>
                    <div  style={{paddingTop:"10%"}}></div>
                      <li><b><FontAwesomeIcon icon={faCheck} beatFade /></b> Apply For Our Game Card</li>
                      <div  style={{paddingTop:"10%"}}></div>
                      <li><b><FontAwesomeIcon icon={faXmark} beatFade /></b> Book All Type Of Game</li>
                    </ul>
                  </div>
                  <div className="pricingTable-BuyNow">
                    <a href="#">Buy Now</a>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 ml-5"  style={{width:"40vh"}}>
                <div className="pricingTable red">
                  <div className="pricingTable-header">
                    <i className="fa fa-cube"></i>
                    <h4>Legend</h4>
                    <div className="price-value"> $299 <span className="month">per month</span> </div>
                  </div>
                  <h3 className="heading">Premium</h3>
                  <div className="pricing-content" style={{paddingTop:"5%"}}> 
                    <ul>
                    <li><b>60GB</b> Book Slot For Game</li>
                    <div  style={{paddingTop:"10%"}}></div>
                      <li><b></b> Apply For Our Game Card</li>
                      <div  style={{paddingTop:"10%"}}></div>
                      <li><b></b>   Book All Type Of Game</li>
                    </ul>
                  </div>
                  <div className="pricingTable-BuyNow">
                    <a href="#">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
      )
}

      export default Membership;



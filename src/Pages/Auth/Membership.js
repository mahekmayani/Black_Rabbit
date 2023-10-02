import React from 'react'
// import '../Auth/Css/Membership.css'
import image from '../Auth/images/1111.png';

const data = [
  { id: 1, title: "Card 1", description: "Description 1" },

];
const Membership = () => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }} >

        <div className='membership-form'>
          <div class="card" style={{ width: "18rem", margin: "50px 0px", marginLeft: "100%" }}>
            <img class="card-img-top" />
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush mb-3 text-center">
              <img src={image}/>
              <li class="list-group-item">Book Slot For Game</li>
              <li class="list-group-item">Apply For Our Game Card</li>
              <li class="list-group-item">Book All Type Of Game</li>
            </ul>
            <div className='container mt-3 mb-3 text-center'>
              <button type='submit' className='btn-btn-primary'><b>Buy Now</b></button>
            </div>
          </div>
        </div>

        <div>
          <div class="card" style={{ width: "18rem", margin: "50px", marginLeft: "100%" }}>
            <img class="card-img-top" />
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush mb-3 text-center">
            <img src={image}/>
              <li class="list-group-item">Book Slot For Game</li>
              <li class="list-group-item">Apply For Our Game Card</li>
              <li class="list-group-item">Book All Type Of Game</li>
            </ul>
            <div className='container mt-3 mb-3 text-center'>
              <button type='submit' className='btn-btn-primary'><b>Buy Now</b></button>
            </div>

          </div>
        </div>

        <div>
          <div class="card" style={{ width: "18rem", margin: "50px", marginLeft: "100%" }}>
            <img class="card-img-top" />
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush  mb-3 text-center">
            <img src={image}/>
              <li class="list-group-item">Book Slot For Game</li>
              <li class="list-group-item">Apply For Our Game Card</li>
              <li class="list-group-item">Book All Type Of Game</li>
            </ul>
            <div className='form'>
              <div className='container mt-3 mb-3 text-center'>
                <button type='submit' className='btn-btn-primary'><b>Buy Now</b></button>
                <span
                  style={{ cursor: "pointer", color: "blue" }}>
                </span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Membership;



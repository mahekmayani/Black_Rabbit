import React from 'react'
// import '../Auth/Css/Membership.css'

const data = [
  { id: 1, title: "Card 1", description: "Description 1" },

];
const Membership = () => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }} >

        <div>
          <div class="card" style={{ width: "18rem" , margin: "50px 0px" ,marginLeft:"100%"}}>
            <img class="card-img-top" />
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Book Slot For Game</li>
              <li class="list-group-item">Apply For Our Game Card</li>
              <li class="list-group-item">Book All Type Of Game</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div>
          <div class="card" style={{ width: "18rem" ,margin: "50px" ,marginLeft:"100%"}}>
            <img class="card-img-top" />
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Book Slot For Game</li>
              <li class="list-group-item">Apply For Our Game Card</li>
              <li class="list-group-item">Book All Type Of Game</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div>
          <div class="card" style={{ width: "18rem",margin: "50px" ,marginLeft:"100%"}}>
            <img class="card-img-top" />
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Book Slot For Game</li>
              <li class="list-group-item">Apply For Our Game Card</li>
              <li class="list-group-item">Book All Type Of Game</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Membership



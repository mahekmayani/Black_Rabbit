
import React from "react";
import image from "../Auth/images/first_activity_image.png";

const data = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 3, title: "Card 3", description: "Description 3" },
    // Add more data as needed
  ];
const Game = () => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((item) => (
          <div className='card' style={{ width: "16rem",  margin: "50px", marginLeft:"auto"}} key={item.id}>
            <img className='card-img-top' src={image} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>{item.title}</h5>
              <p className='card-text'>{item.description}</p>
              <button type='button' className='btn btn-primary'>
                Primary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;

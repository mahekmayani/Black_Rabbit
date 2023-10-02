
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";


  const Game = () => {
    const [gameData, setGameData] = useState([]);
    console.log("gameData",gameData);


   const navigate = useNavigate()
   
   const getGameDetails = () => {
        // axios.get("http://localhost:3000/api/v1/games/get", form_data)
        axios.get("http://localhost:3000/api/v1/games/get")
        .then((res) =>{
          // console.log("res.data",res.data);
          setGameData(res.data)
          
        
            })
      }
      
      useEffect(()=>{
        getGameDetails()
      },[])
  return (
    <div className="container">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {gameData.map((item) => (
          <div className='card' style={{ width: "16rem",  margin: "1%", marginLeft:"7.5%"}} key={item.id}>
            <img className='card-img-top' src={`http://localhost:3000${item.image}`} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>{item.description}</p>
              <p className='card-text'>{item.price}</p>
              
              <p className='btn btn-primary'>Game Details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
    
  

export default Game;

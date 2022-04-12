import React from 'react';
import {useNavigate} from "react-router-dom";
import './CardItems.css';

function CardItem(element) {

  const navigate = useNavigate();

  const handleClick = (e) => {
      if (e.target.closest(".available-item")) {
          navigate(`/hotels:${element.id}`);
      }

  }


   return (
       <div className={element.useClass} id={element.id} onClick={handleClick}>
           <img className="card-item-img" src={element.item.imageUrl} alt={element.item.name}/>
           <p className="card-item-title">{element.item.name}</p>
           <p className="card-item-location">{element.item.city}, {element.item.country}</p>
       </div>
   )
}

export default CardItem;

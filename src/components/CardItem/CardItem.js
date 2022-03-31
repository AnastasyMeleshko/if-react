import React from 'react';
import './CardItems.css';

function CardItem(element) {
   return (
       <div className={element.useClass}>
           <img className="card-item-img" src={element.item.imageUrl} alt={element.item.name}/>
           <p className="card-item-title">{element.item.name}</p>
           <p className="card-item-location">{element.item.city}, {element.item.country}</p>
       </div>
   )
}

export default CardItem;
